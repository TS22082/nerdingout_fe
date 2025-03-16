import { FormEvent, useEffect, useState } from 'react';
import { ArticleType, BodyEntryOptionsType } from '../../../types/types.ts';
import { useNavigate, useParams } from 'react-router-dom';
import useUsersArticle from '../../../hooks/api/useUsersArticle.ts';
import { toast } from 'react-toastify';

const useEditPostPageData = () => {
  const navigate = useNavigate();
  const authToken = localStorage.getItem('access_token');
  const [activeTab, setActiveTab] = useState({
    edit: true,
    preview: false,
  });

  const { articleId } = useParams();
  const [formState, setFormState] = useState<ArticleType>({
    creatorId: '',
    id: '',
    title: '',
    description: '',
    coverPhoto: '',
    isPublished: false,
    body: [],
    updatedAt: '',
  });

  const { usersArticle, usersArticleLoading } = useUsersArticle(
    articleId || ''
  );

  useEffect(() => {
    if (usersArticle !== undefined) setFormState(usersArticle);
  }, [usersArticle]);

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
      edit: false,
      preview: false,
    };

    setActiveTab({ ...clearSettings, [tab]: true });
  };

  const handleSave = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!authToken || !formState) {
      return;
    }

    console.log(JSON.stringify(formState));

    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL;
      await fetch(`${baseUrl}/articles/${usersArticle.id}`, {
        method: 'PATCH',
        body: JSON.stringify(formState),
        headers: {
          'Content-Type': 'application/json',
          Authorization: authToken,
        },
      });

      toast.success('Article updated successfully');
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
    }
    console.log('New Article Form', formState);
  };

  return {
    activeTab,
    formState,
    usersArticleLoading,
    handleBodyChange,
    handleSetActiveTab,
    handleFormChange,
    handleNewBodyItem,
    handleSave,
  };
};

export default useEditPostPageData;
