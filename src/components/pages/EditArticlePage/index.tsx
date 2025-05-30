import { Col, Container, Row } from 'react-bootstrap';
import TabsContainer from '../../containers/TabsContainer';
import ArticleForm from '../../forms/ArticleForm';
import ArticleView from '../../views/ArticleView';
import ArticleBodyView from '../../views/ArticleBodyView';
import useEditPostPageData from './useEditArticlePageData.ts';
import LoadingContainer from '../../containers/LoadingContainer';

const EditArticlePage = () => {
  const {
    activeTab,
    formState,
    categories,
    categoriesLoading,
    handleSetActiveTab,
    handleFormChange,
    handleNewBodyItem,
    handleBodyChange,
    handleSave,
  } = useEditPostPageData();

  if (categoriesLoading) {
    return <LoadingContainer />;
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={{
            span: 8,
            offset: 2,
          }}
        >
          <TabsContainer
            tabs={activeTab}
            handleSetActiveTab={handleSetActiveTab}
          >
            {activeTab['edit'] && (
              <ArticleForm
                formState={formState}
                handleFormChange={handleFormChange}
                handleNewBodyItem={handleNewBodyItem}
                handleBodyChange={handleBodyChange}
                handleSave={handleSave}
                categories={categories}
              />
            )}

            {activeTab['preview'] && (
              <div className="my-3">
                <ArticleView data={formState}>
                  <ArticleBodyView data={formState} />
                </ArticleView>
              </div>
            )}
          </TabsContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default EditArticlePage;
