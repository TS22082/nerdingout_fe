import usePublishedArticles from '../../../hooks/api/usePublishedArticles.ts';
import LoadingContainer from '../../containers/LoadingContainer';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const { publishedArticles, articlesLoading } = usePublishedArticles();
  const navigate = useNavigate();

  if (articlesLoading) {
    return <LoadingContainer />;
  }

  return (
    <>
      <div
        style={{
          height: '600px',
          backgroundImage:
            'url("https://res.cloudinary.com/geek-centric/image/upload/v1741812246/nerdingout/cyber_overview_fxoimz.jpg")',
          width: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      />
      <Container>
        <Row>
          {publishedArticles.length > 0 &&
            publishedArticles.map((article, index) => (
              <Col key={index} xs={12} sm={12} md={6}>
                <Card
                  style={{
                    marginTop: 10,
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={article.coverPhoto}
                    as="div"
                    style={{
                      height: '300px',
                      backgroundImage: `url(${article.coverPhoto})`,
                      width: '100%',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center center',
                    }}
                  />
                  <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Text>{article.description}</Card.Text>
                    <Button
                      onClick={() => navigate(`/article/${article.id}`)}
                      variant="primary"
                    >
                      View Article
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default LandingPage;
