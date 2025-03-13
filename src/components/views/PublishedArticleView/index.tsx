import { FormStateType } from '../../../types/types.ts';
import React from 'react';
import ReactMarkdown from 'react-markdown';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';

type ViewData = {
  data: FormStateType;
};

const PublishedArticleView: React.FC<ViewData> = ({ data }) => {
  return (
    <>
      {data.title && <h1 className="mb-3">{data.title}</h1>}
      {data.description && <p className="mb-3">{data.description}</p>}

      {data.body &&
        data.body.map((item, i) => {
          if (item.type === 'text') {
            return (
              <ReactMarkdown
                key={i}
                children={item.value}
                remarkPlugins={[remarkGfm]}
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
              backgroundPosition: 'center center',
              backgroundSize: 'cover',
              height: '400px',
            };

            return <div key={i} className="mb-3" style={itemStyles}></div>;
          }
        })}
    </>
  );
};

export default PublishedArticleView;
