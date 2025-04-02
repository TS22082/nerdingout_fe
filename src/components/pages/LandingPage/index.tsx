import LoadingContainer from '../../containers/LoadingContainer';
import ArticleCard from '../../views/ArticleCard';
import { Col, Container, Row } from 'react-bootstrap';
import useLandingPageData from './useLandingPageData.ts';

const LandingPage = () => {
  const { publishedArticles, pageLoading, wrapperStyles, categoryMapById } =
    useLandingPageData();

  if (pageLoading) return <LoadingContainer />;
  return (
    <>
      <div style={wrapperStyles} />
      <Container>
        <Row>
          {publishedArticles.length > 0 &&
            publishedArticles.map((article, index) => (
              <Col key={index} xs={12} lg={6}>
                <ArticleCard
                  article={article}
                  categoryMapById={categoryMapById}
                />
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default LandingPage;
