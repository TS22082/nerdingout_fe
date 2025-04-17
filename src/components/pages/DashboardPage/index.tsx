import {
  Badge,
  Card,
  Col,
  Container,
  Dropdown,
  Form,
  Row,
} from 'react-bootstrap';
import useDashboardPageData from './useDashboardPageData.ts';
import LoadingContainer from '../../containers/LoadingContainer';
import DeleteArticleModal from '../../modals/DeleteArticleModal';
import { useNavigate } from 'react-router';

const DashboardPage = () => {
  const {
    userArticles,
    articlesLoading,
    handlePublishArticleToggle,
    modalState,
    categoryMapById,
    closeModal,
    handleOpenModal,
    handleDeleteSubmit,
  } = useDashboardPageData();

  const navigate = useNavigate();

  if (articlesLoading) {
    return <LoadingContainer />;
  }

  return (
    <>
      <DeleteArticleModal
        show={modalState.open}
        data={modalState.data}
        handleClose={closeModal}
        handleSubmit={handleDeleteSubmit}
      />
      <Container>
        <Row>
          {userArticles.length > 0 &&
            userArticles.map((article, index) => (
              <Col sm={12} md={6} xl={4}>
                <Card
                  data-bs-theme="dark"
                  style={{
                    marginTop: 10,
                  }}
                >
                  <Card.Body>
                    <Card.Text className="text-truncate">
                      {article.title}
                    </Card.Text>
                    <Badge bg="secondary">
                      {categoryMapById.get(article.categoryId).label}
                    </Badge>
                    <div
                      style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      <div
                        style={{
                          width: '80%',
                          borderStyle: 'solid',
                          borderWidth: 1,
                          color: 'lightgray',
                          marginTop: '15px',
                          marginBottom: '15px',
                        }}
                      />
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Dropdown>
                        <Dropdown.Toggle
                          size="sm"
                          variant="secondary"
                          id="dropdown-basic"
                        >
                          Actions
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item
                            onClick={() =>
                              navigate(`/dashboard/article/${article.id}`)
                            }
                          >
                            View
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => navigate(`/edit/${article.id}`)}
                          >
                            Edit
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => handleOpenModal(article)}
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Form>
                        <Form.Check
                          type="switch"
                          id={`custom-switch-${index}`}
                          label={article.isPublished ? 'Deployed' : 'Draft'}
                          reverse
                          checked={article.isPublished}
                          onClick={async () => {
                            try {
                              await handlePublishArticleToggle(index);
                            } catch (err) {
                              console.error('error ==> ', err);
                            }
                          }}
                        />
                      </Form>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default DashboardPage;
