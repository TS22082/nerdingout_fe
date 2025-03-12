import React, { useState } from 'react';
import { BodyEntryOptionsType, FormStateType } from '../../../types/types.ts';

const useNewPostPageData = () => {
  const authToken = localStorage.getItem('access_token');
  const [activeTab, setActiveTab] = useState({
    new: true,
    preview: false,
  });

  const [formState, setFormState] = useState<FormStateType>({
    title: '',
    coverPhoto: '',
    description: '',
    body: [],
    isPublished: false,
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

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!authToken || !formState) {
      return;
    }

    console.log(JSON.stringify(formState));

    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL;
      const response = await fetch(`${baseUrl}/articles`, {
        method: 'POST',
        body: JSON.stringify(formState),
        headers: {
          'Content-Type': 'application/json',
          Authorization: authToken,
        },
      });

      const data = await response.json();

      console.log('data ==>', JSON.stringify(data));
    } catch (err) {
      console.error(err);
    }
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
