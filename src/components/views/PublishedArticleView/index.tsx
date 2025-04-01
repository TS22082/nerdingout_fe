import { FormStateType } from '../../../types/types.ts';
import { FC, ReactNode } from 'react';

type ViewData = {
  data: FormStateType;
  children: ReactNode;
};

const PublishedArticleView: FC<ViewData> = ({ data, children }) => {
  return (
    <>
      {data.title && <h1 className="mb-3 text-light">{data.title}</h1>}
      {data.description && (
        <p className="mb-3 text-light">{data.description}</p>
      )}
      {children}
    </>
  );
};

export default PublishedArticleView;
