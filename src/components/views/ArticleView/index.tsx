import ReactMarkdown from 'react-markdown';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

type ArticleValueTypes = {
  title: string;
  description: string;
  body: string;
};

type ViewData = {
  data: ArticleValueTypes;
};

const ArticleView: React.FC<ViewData> = ({ data }) => {
  return (
    <>
      <h1 className="mb-3">{data.title}</h1>
      <h3 className="mb-3">{data.description}</h3>
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
    </>
  );
};

export default ArticleView;
