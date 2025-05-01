import { FC } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ArticleBodyProps } from '../../../types/types.ts';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const ArticleBodyView: FC<ArticleBodyProps> = ({ data }) => {
  if (!data.body) return null;

  return data.body.map((item, i) => {
    if (item.type === 'text') {
      return (
        <div className="my-5">
          <ReactMarkdown
            key={i}
            children={item.value}
            remarkPlugins={[remarkGfm]}
            components={{
              ul: ({ ...props }) => (
                <ul className="fs-5 text-light" {...props} />
              ),
              p: ({ ...props }) => <p className="fs-5 text-light" {...props} />,
              h1: ({ ...props }) => (
                <h1 className="fs-1 text-light" {...props} />
              ),
              h2: ({ ...props }) => (
                <h2 className="fs-2 text-light" {...props} />
              ),
              h3: ({ ...props }) => (
                <h3 className="fs-3 text-light" {...props} />
              ),
              h4: ({ ...props }) => (
                <h4 className="fs-3 text-light" {...props} />
              ),
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
        </div>
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
  });
};

export default ArticleBodyView;
