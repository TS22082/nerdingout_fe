import TabsContainer from '../../containers/TabsContainer';
import useNewPostPageData from './useNewPostPageData.ts';
import ArticleForm from '../../forms/ArticleForm';
import ArticleView from '../../views/ArticleView';
import { Col, Container, Row } from 'react-bootstrap';
import ArticleBodyView from '../../views/ArticleBodyView';

const NewPostPage = () => {
  const {
    activeTab,
    formState,
    categories,
    handleSetActiveTab,
    handleFormChange,
    handleNewBodyItem,
    handleBodyChange,
    handleSave,
  } = useNewPostPageData();

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
            {activeTab['new'] && (
              <ArticleForm
                formState={formState}
                categories={categories}
                handleFormChange={handleFormChange}
                handleNewBodyItem={handleNewBodyItem}
                handleBodyChange={handleBodyChange}
                handleSave={handleSave}
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

export default NewPostPage;
