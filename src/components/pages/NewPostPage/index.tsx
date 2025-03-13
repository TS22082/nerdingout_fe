import TabsContainer from '../../containers/TabsContainer';
import useNewPostPageData from './useNewPostPageData.ts';
import NewArticleForm from '../../forms/NewArticleForm';
import ArticleView from '../../views/ArticleView';
import { Col, Container, Row } from 'react-bootstrap';

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
        </Col>
      </Row>
    </Container>
  );
};

export default NewPostPage;
