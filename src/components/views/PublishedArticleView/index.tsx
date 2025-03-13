import { FormStateType } from '../../../types/types.ts';
import React from 'react';

type ViewData = {
  data: FormStateType;
  children: React.ReactNode;
};

const PublishedArticleView: React.FC<ViewData> = ({ data, children }) => {
  return (
    <>
      {data.title && <h1 className="mb-3">{data.title}</h1>}
      {data.description && <p className="mb-3">{data.description}</p>}
      {children}
    </>
  );
};

export default PublishedArticleView;
