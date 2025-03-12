import TabsContainer from '../../containers/TabsContainer';
import useNewPostPageData from './useNewPostPageData.ts';
import NewArticleForm from '../../forms/NewArticleForm';
import ArticleView from '../../views/ArticleView';

const NewPostPage = () => {
  const {
    activeTab,
    formState,
    handleSetActiveTab,
    handleFormChange,
    handleNewBodyItem,
    handleBodyChange,
    handleSave,
  } = useNewPostPageData();

  return (
    <TabsContainer tabs={activeTab} handleSetActiveTab={handleSetActiveTab}>
      {activeTab['new'] && (
        <NewArticleForm
          formState={formState}
          handleFormChange={handleFormChange}
          handleNewBodyItem={handleNewBodyItem}
          handleBodyChange={handleBodyChange}
          handleSave={handleSave}
        />
      )}

      {activeTab['preview'] && (
        <div className="my-3">
          <ArticleView data={formState} />
        </div>
      )}
    </TabsContainer>
  );
};

export default NewPostPage;
