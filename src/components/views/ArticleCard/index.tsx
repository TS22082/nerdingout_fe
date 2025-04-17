import {
  Badge,
  Button,
  Card,
  Col,
  Row,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';
import { useNavigate, NavLink } from 'react-router';
import { FC } from 'react';
import { ArticleCardProps } from '../../../types/types.ts';

const ArticleCard: FC<ArticleCardProps> = ({ article, categoryMapById }) => {
  const navigate = useNavigate();

  return (
    <Card className="mt-3" data-bs-theme="dark">
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
        <Row>
          <Col xs={10} className="d-flex justify-content-start">
            <OverlayTrigger overlay={<Tooltip>{article.title}</Tooltip>}>
              <Card.Title className="text-truncate fs-2 m-0">
                <NavLink className="articleLink" to={`/article/${article.id}`}>
                  {article.title}
                </NavLink>
              </Card.Title>
            </OverlayTrigger>
          </Col>
          <Col xs={2} className="d-flex justify-content-end align-items-center">
            <Badge bg="secondary">
              {categoryMapById.get(article.categoryId)?.label || ''}
            </Badge>
          </Col>
        </Row>
        <Card.Text className="text-body-secodary text-truncate fs-5 mt-3">
          {article.description}
        </Card.Text>
        <Button
          onClick={() => navigate(`/article/${article.id}`)}
          variant="primary"
        >
          View Article
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ArticleCard;
