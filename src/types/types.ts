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
};

export type NewArticleFormType = {
  formState: {
    title: string;
    coverPhoto: string;
    description: string;
    isPublished: boolean;
    body: BodyFormType[];
  };
  handleFormChange: (field: string, value: string) => void;
  handleNewBodyItem: (type: BodyEntryOptionsType) => void;
  handleBodyChange: (index: number, value: string) => void;
  handleSave: (e: React.FormEvent<HTMLFormElement>) => void;
};
