import {
  Button,
  ButtonGroup,
  Dropdown,
  DropdownButton,
  Form,
} from 'react-bootstrap';

import { BodyFormType, NewArticleFormType } from '../../../types/types.ts';
import { FC } from 'react';

const ArticleForm: FC<NewArticleFormType> = ({
  formState,
  categories,
  handleFormChange,
  handleNewBodyItem,
  handleBodyChange,
  handleSave,
}) => {
  const CategoryMapById = new Map();
  const CategoryMapByName = new Map();

  categories.forEach((category) => CategoryMapById.set(category.id, category));
  categories.forEach((category) =>
    CategoryMapByName.set(category.label, category)
  );

  return (
    <Form onSubmit={handleSave}>
      <Form.Group className="my-3">
        <Form.Label column={true}>Category</Form.Label>
        <Form.Select
          onChange={(e) =>
            handleFormChange(
              'categoryId',
              CategoryMapByName.get(e.target.value)?.id
            )
          }
          value={CategoryMapById.get(formState.categoryId)?.label}
        >
          {categories.map((category) => (
            <option>{category.label}</option>
          ))}
        </Form.Select>
        <Form.Label column={true}>Title</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Title ..."
          value={formState.title}
          onChange={(e) => handleFormChange('title', e.currentTarget.value)}
        />
      </Form.Group>
      <Form.Group className="my-3">
        <Form.Label column={true}>Cover Photo</Form.Label>
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
        <Form.Label column={true}>Description</Form.Label>
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
      {formState.body.length > 0 &&
        formState.body.map((item: BodyFormType, index: number) => {
          if (item.type === 'text') {
            return (
              <Form.Group key={index} className="mb-3">
                <Form.Label column={true}>Text Section</Form.Label>
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
                <Form.Label column={true}>Image Section</Form.Label>
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
          as={ButtonGroup as 'div'}
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

export default ArticleForm;
