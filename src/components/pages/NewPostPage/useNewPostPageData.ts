import { useState } from 'react';

const useNewPostPageData = () => {
  const [activeTab, setActiveTab] = useState({
    new: true,
    preview: false,
  });

  const [formState, setFormState] = useState({
    title: '',
    description: '',
    body: '',
  });

  const handleFormChange = (key: string, value: string) => {
    setFormState((prevState) => ({ ...prevState, [key]: value }));
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
    handleSetActiveTab,
    handleFormChange,
  };
};

export default useNewPostPageData;
