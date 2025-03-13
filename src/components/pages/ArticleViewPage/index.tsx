import useArticleViewPageData from './useArticleViewPageData.ts';
import LoadingContainer from '../../containers/LoadingContainer';
import { Col, Container, Row } from 'react-bootstrap';
import PublishedArticleView from '../../views/PublishedArticleView';

const ArticleViewPage = () => {
  const { publishedArticle, publishedArticleLoading } =
    useArticleViewPageData();

  if (publishedArticleLoading) {
    return <LoadingContainer />;
  }

  return (
    <div>
      <div
        style={{
          height: '600px',
          backgroundImage: `url(${publishedArticle.coverPhoto})`,
          width: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      />
      <Container>
        <Row>
          <Col xs={12} sm={12} md={{ span: 6, offset: 3 }}>
            <PublishedArticleView data={publishedArticle} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ArticleViewPage;
