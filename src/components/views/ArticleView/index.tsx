import ReactMarkdown from 'react-markdown';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import React from 'react';
import { BodyFormType } from '../../../types/types.ts';

type ArticleValueTypes = {
  title: string;
  coverPhoto: string;
  description: string;
  body: string;
  _body: BodyFormType[];
};

type ViewData = {
  data: ArticleValueTypes;
};

const ArticleView: React.FC<ViewData> = ({ data }) => {
  const imageStyles = {
    backgroundImage: `url(${data.coverPhoto})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '400px',
  };

  return (
    <>
      {data.title && <h1 className="mb-3">{data.title}</h1>}
      {data.coverPhoto && <div className="mb-3" style={imageStyles}></div>}
      {data.description && <p className="mb-3">{data.description}</p>}
      {data.body && (
        <ReactMarkdown
          children={data.body}
          components={{
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            code({ inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  style={dark || undefined}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        />
      )}

      {data._body &&
        data._body.map((item, i) => {
          if (item.type === 'text') {
            return (
              <ReactMarkdown
                key={i}
                children={item.value}
                components={{
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-expect-error
                  code({ inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '');
                    return !inline && match ? (
                      <SyntaxHighlighter
                        children={String(children).replace(/\n$/, '')}
                        style={dark || undefined}
                        language={match[1]}
                        PreTag="div"
                        {...props}
                      />
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  },
                }}
              />
            );
          }
          if (item.type === 'image') {
            const itemStyles = {
              backgroundImage: `url(${item.value})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              height: '400px',
            };

            return <div className="mb-3" style={itemStyles}></div>;
          }
        })}
    </>
  );
};

export default ArticleView;
