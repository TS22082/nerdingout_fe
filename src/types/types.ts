import React from 'react';

export type BodyEntryOptionsType = 'text' | 'image';

export type BodyFormType = {
  type: BodyEntryOptionsType;
  value: string;
};

export type FormStateType = {
  title: string;
  description: string;
  coverPhoto: string;
  isPublished: boolean;
  body: BodyFormType[];
  categoryId: string;
};

export type NewArticleFormType = {
  formState: FormStateType;
  categories: CategoryType[];
  handleFormChange: (field: string, value: string) => void;
  handleNewBodyItem: (type: BodyEntryOptionsType) => void;
  handleBodyChange: (index: number, value: string) => void;
  handleSave: (e: React.FormEvent<HTMLFormElement>) => void;
};

export type ArticleType = {
  creatorId: string;
  id: string;
  title: string;
  description: string;
  coverPhoto: string;
  isPublished: boolean;
  body: BodyFormType[];
  updatedAt: string;
  categoryId: string;
};

export type CategoryType = {
  id: string;
  label: string;
};

export type ModalStateType = {
  data: ArticleType | undefined;
  open: boolean;
};

export type ArticleViewProps = {
  data: FormStateType;
  children: React.ReactNode;
};

export type ArticleBodyProps = {
  data: FormStateType;
};

export type DeleteArticlePropsTypes = {
  show: boolean;
  handleClose: () => void;
  handleSubmit: () => void;
  data: ArticleType | undefined;
};

export type ArticleCardProps = {
  article: ArticleType;
  categoryMapById: Map<string, CategoryType>;
};
