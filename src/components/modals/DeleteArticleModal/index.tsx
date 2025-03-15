import { FC } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { DeleteArticlePropsTypes } from '../../../types/types.ts';

const DeleteArticleModal: FC<DeleteArticlePropsTypes> = ({
  show,
  data,
  handleClose,
  handleSubmit,
}) => {
  if (!data?.title) return null;
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Article</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Are you sure you want to delete this article? This action can not be
          undone.
        </p>
        <p className="mt-3">Title: {data.title}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteArticleModal;
