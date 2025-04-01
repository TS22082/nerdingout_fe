import { ArticleViewProps } from '../../../types/types.ts';
import { FC } from 'react';

const ArticleView: FC<ArticleViewProps> = ({ data, children }) => {
  const imageStyles = {
    backgroundImage: `url(${data.coverPhoto})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    height: '400px',
  };

  return (
    <>
      {data.title && <h1 className="mb-3 text-light">{data.title}</h1>}
      {data.coverPhoto && <div className="mb-3" style={imageStyles}></div>}
      {data.description && (
        <p className="mb-3 text-light">
          {data.description}
          {data.description}
        </p>
      )}
      {children}
    </>
  );
};

export default ArticleView;
