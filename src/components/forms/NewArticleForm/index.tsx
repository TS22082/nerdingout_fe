import {
  Button,
  ButtonGroup,
  Dropdown,
  DropdownButton,
  Form,
} from 'react-bootstrap';
import React from 'react';
import { BodyFormType, NewArticleFormType } from '../../../types/types.ts';

const NewArticleForm: React.FC<NewArticleFormType> = ({
  formState,
  handleFormChange,
  handleNewBodyItem,
  handleBodyChange,
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
      {formState._body.length > 0 &&
        formState._body.map((item: BodyFormType, index: number) => {
          if (item.type === 'text') {
            return (
              <Form.Group key={index} className="mb-3">
                <Form.Label>Text Section</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  placeholder="Accepts Markdown ..."
                  style={{ height: '100px' }}
                  value={item.value}
                  onChange={(e) =>
                    handleBodyChange(index, e.currentTarget.value)
                  }
                />
              </Form.Group>
            );
          }
          if (item.type === 'image') {
            return (
              <Form.Group key={index} className="mb-3">
                <Form.Label>Image Section</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Add Image URL here ..."
                  value={item.value}
                  onChange={(e) =>
                    handleBodyChange(index, e.currentTarget.value)
                  }
                />
              </Form.Group>
            );
          }
        })}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <DropdownButton
          as={ButtonGroup}
          title="New Section"
          id="bg-nested-dropdown"
        >
          <Dropdown.Item eventKey="1" onClick={() => handleNewBodyItem('text')}>
            Text
          </Dropdown.Item>
          <Dropdown.Item
            eventKey="2"
            onClick={() => handleNewBodyItem('image')}
          >
            Image
          </Dropdown.Item>
        </DropdownButton>
        <Button type="submit">Save</Button>
      </div>
    </Form>
  );
};

export default NewArticleForm;
