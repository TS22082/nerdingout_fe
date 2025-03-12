import React, { useState } from 'react';
import { BodyEntryOptionsType, FormStateType } from '../../../types/types.ts';

const useNewPostPageData = () => {
  const [activeTab, setActiveTab] = useState({
    new: true,
    preview: false,
  });

  const [formState, setFormState] = useState<FormStateType>({
    title: '',
    coverPhoto: '',
    description: '',
    body: [],
  });

  const handleFormChange = (key: string, value: string) => {
    setFormState((prevState) => ({ ...prevState, [key]: value }));
  };

  const handleNewBodyItem = (type: BodyEntryOptionsType) => {
    const newFormItem = {
      type,
      value: '',
    };

    setFormState((prevState) => ({
      ...prevState,
      body: [...prevState.body, newFormItem],
    }));
  };

  const handleBodyChange = (index: number, value: string) => {
    setFormState((prevState) => {
      const bodyCopy = [...prevState.body];
      bodyCopy[index] = { ...bodyCopy[index], value };

      return {
        ...prevState,
        body: bodyCopy,
      };
    });
  };

  const handleSetActiveTab = (tab: string) => {
    const clearSettings = {
      new: false,
      preview: false,
    };

    setActiveTab({ ...clearSettings, [tab]: true });
  };

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('New Article Form', formState);
  };

  return {
    activeTab,
    formState,
    handleBodyChange,
    handleSetActiveTab,
    handleFormChange,
    handleNewBodyItem,
    handleSave,
  };
};

export default useNewPostPageData;
