import LoadingContainer from '../../containers/LoadingContainer';
import { Col, Container, Row } from 'react-bootstrap';
import PublishedArticleView from '../../views/PublishedArticleView';
import { useParams } from 'react-router';
import ArticleBodyView from '../../views/ArticleBodyView';
import useUsersArticle from '../../../hooks/api/useUsersArticle.ts';

const ArticleViewPage = () => {
  const { articleId } = useParams();

  const { usersArticle, usersArticleLoading } = useUsersArticle(
    articleId || ''
  );

  if (usersArticleLoading) {
    return <LoadingContainer />;
  }

  return (
    <>
      <div
        style={{
          height: '600px',
          backgroundImage: `url(${usersArticle.coverPhoto})`,
          width: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      />
      <Container>
        <Row>
          <Col xs={12} sm={12} md={{ span: 6, offset: 3 }}>
            <PublishedArticleView data={usersArticle}>
              <ArticleBodyView data={usersArticle} />
            </PublishedArticleView>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ArticleViewPage;
