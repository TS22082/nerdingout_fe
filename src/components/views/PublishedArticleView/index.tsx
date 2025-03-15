import { FormStateType } from '../../../types/types.ts';
import { FC } from 'react';

type ViewData = {
  data: FormStateType;
  children: React.ReactNode;
};

const PublishedArticleView: FC<ViewData> = ({ data, children }) => {
  return (
    <>
      {data.title && <h1 className="mb-3">{data.title}</h1>}
      {data.description && <p className="mb-3">{data.description}</p>}
      {children}
    </>
  );
};

export default PublishedArticleView;
