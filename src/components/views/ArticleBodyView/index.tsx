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
        <ReactMarkdown
          key={i}
          children={item.value}
          remarkPlugins={[remarkGfm]}
          components={{
            ul: ({ ...props }) => <ul style={{ color: 'white' }} {...props} />,
            h1: ({ ...props }) => <h1 style={{ color: 'white' }} {...props} />,
            h2: ({ ...props }) => <h1 style={{ color: 'white' }} {...props} />,
            h3: ({ ...props }) => <h1 style={{ color: 'white' }} {...props} />,
            h4: ({ ...props }) => <h1 style={{ color: 'white' }} {...props} />,
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
  });
};

export default ArticleBodyView;
