import usePublishedArticles from '../../../hooks/api/usePublishedArticles.ts';
import { useEffect } from 'react';
import { useUserId } from '../../../hooks/state/useUserId.ts';
import LoadingContainer from '../../containers/LoadingContainer';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const { publishedArticles, articlesLoading } = usePublishedArticles();
  const navigate = useNavigate();
  const { userId } = useUserId();

  useEffect(() => {
    console.log('Articles ==>', publishedArticles);
    console.log('Users ID ==>', userId);
  }, [publishedArticles, userId]);

  if (articlesLoading) {
    return <LoadingContainer />;
  }

  return (
    <div>
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
              <Col
                key={index}
                xs={12}
                sm={12}
                md={{
                  span: 6,
                }}
              >
                <Card
                  style={{
                    marginTop: 10,
                  }}
                >
                  <div
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
    </div>
  );
};

export default LandingPage;
