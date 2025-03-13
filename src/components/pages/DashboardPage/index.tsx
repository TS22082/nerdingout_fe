import { Col, Container, Form, Row, Table } from 'react-bootstrap';
import useDashboardPageData from './useDashboardPageData.ts';
import LoadingContainer from '../../containers/LoadingContainer';

const DashboardPage = () => {
  const { articles, articlesLoading, handlePublishArticleToggle } =
    useDashboardPageData();

  console.log('articles ==>', articles);

  if (articlesLoading) {
    return <LoadingContainer />;
  }

  return (
    <Container>
      <Row className="mt-3">
        <Col
          sm={12}
          md={12}
          lg={{
            span: 8,
            offset: 2,
          }}
        >
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Description</th>
                <th>Published</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((article, index) => (
                <tr key={article.id}>
                  <td>{index + 1}</td>
                  <td>{article.title}</td>
                  <td>{article.description}</td>
                  <td>
                    <Form>
                      <Form.Check
                        onChange={() => handlePublishArticleToggle(index)}
                        checked={article.isPublished}
                        type="switch"
                        id="custom-switch"
                      />
                    </Form>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardPage;
