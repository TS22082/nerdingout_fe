import React from 'react';
import { ArticleViewProps } from '../../../types/types.ts';

const ArticleView: React.FC<ArticleViewProps> = ({ data, children }) => {
  const imageStyles = {
    backgroundImage: `url(${data.coverPhoto})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    height: '400px',
  };

  return (
    <>
      {data.title && <h1 className="mb-3">{data.title}</h1>}
      {data.coverPhoto && <div className="mb-3" style={imageStyles}></div>}
      {data.description && <p className="mb-3">{data.description}</p>}
      {children}
    </>
  );
};

export default ArticleView;
