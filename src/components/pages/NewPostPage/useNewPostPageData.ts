import { useState } from 'react';
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
    body: '',
    _body: [],
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
      _body: [...prevState._body, newFormItem],
    }));
  };

  const handleBodyChange = (index: number, value: string) => {
    setFormState((prevState) => {
      const bodyCopy = [...prevState._body];
      bodyCopy[index] = { ...bodyCopy[index], value };

      return {
        ...prevState,
        _body: bodyCopy,
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

  return {
    activeTab,
    formState,
    handleBodyChange,
    handleSetActiveTab,
    handleFormChange,
    handleNewBodyItem,
  };
};

export default useNewPostPageData;
