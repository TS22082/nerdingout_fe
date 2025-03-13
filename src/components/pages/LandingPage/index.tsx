import useArticles from '../../../hooks/api/useArticles.ts';
import { useEffect } from 'react';
import { useUserId } from '../../../hooks/state/useUserId.ts';
import LoadingContainer from '../../containers/LoadingContainer';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const LandingPage = () => {
  const { articles, articlesLoading } = useArticles();
  const { userId } = useUserId();

  useEffect(() => {
    console.log('LandingPage ==>', articles);
    console.log('Users ID ==>', userId);
  }, [articles, userId]);

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
      <Container className={'mt-3'}>
        <Row>
          {articles.length > 0 &&
            articles.map((article, index) => (
              <Col
                key={index}
                xs={12}
                sm={12}
                md={{
                  span: 6,
                }}
              >
                <Card>
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
                    <Button variant="primary">View Article</Button>
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
