import LoadingContainer from '../../containers/LoadingContainer';
import { Col, Container, Row } from 'react-bootstrap';
import PublishedArticleView from '../../views/PublishedArticleView';
import { useParams } from 'react-router';
import usePublishedArticle from '../../../hooks/api/usePublishedArticle.ts';
import ArticleBodyView from '../../views/ArticleBodyView';

const ArticleViewPage = () => {
  const { articleId } = useParams();

  const { publishedArticle, publishedArticleLoading } = usePublishedArticle(
    articleId || ''
  );

  if (publishedArticleLoading) {
    return <LoadingContainer />;
  }

  return (
    <>
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
          <Col xs={12} sm={12} md={{ span: 8, offset: 2 }}>
            <PublishedArticleView data={publishedArticle}>
              <ArticleBodyView data={publishedArticle} />
            </PublishedArticleView>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ArticleViewPage;
