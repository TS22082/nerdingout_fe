import { Button, Form } from 'react-bootstrap';

type NewArticleForm = {
  formState: {
    title: string;
    coverPhoto: string;
    description: string;
    body: string;
  };
  handleFormChange: (field: string, value: string) => void;
};

const NewArticleForm: React.FC<NewArticleForm> = ({
  formState,
  handleFormChange,
}) => {
  return (
    <Form>
      <Form.Group className="my-3">
        <Form.Label>Title</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Title ..."
          value={formState.title}
          onChange={(e) => handleFormChange('title', e.currentTarget.value)}
        />
      </Form.Group>
      <Form.Group className="my-3">
        <Form.Label>Cover Photo</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Enter address for a photo ..."
          value={formState.coverPhoto}
          onChange={(e) =>
            handleFormChange('coverPhoto', e.currentTarget.value)
          }
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          required
          as="textarea"
          placeholder="Add reason, or inspiration behind the post ..."
          style={{ height: '100px' }}
          value={formState.description}
          onChange={(e) =>
            handleFormChange('description', e.currentTarget.value)
          }
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Body</Form.Label>
        <Form.Control
          required
          as="textarea"
          placeholder="Accepts Markdown ..."
          style={{ height: '300px' }}
          value={formState.body}
          onChange={(e) => handleFormChange('body', e.currentTarget.value)}
        />
      </Form.Group>
      <Button type="submit">Save</Button>
    </Form>
  );
};

export default NewArticleForm;
