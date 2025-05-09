import { FormStateType } from '../../../types/types.ts';
import { FC, ReactNode } from 'react';

type ViewData = {
  data: FormStateType;
  children: ReactNode;
};

const PublishedArticleView: FC<ViewData> = ({ data, children }) => {
  return (
    <>
      {data.title && <h1 className="my-3 text-light fs-1">{data.title}</h1>}
      {data.description && (
        <p className="mb-3 text-light fs-5">{data.description}</p>
      )}
      {children}
    </>
  );
};

export default PublishedArticleView;
