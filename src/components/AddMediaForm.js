import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { addMedia } from "../service";

const AddMediaForm = props => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [addMediaFormState, setAddMediaFormState] = useState({
    name: "",
    type: "Anime",
    genre: "",
    completed: false,
    characters: [],
    comment: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    setIsEnabled(false);
    addMedia(
      addMediaFormState.name,
      addMediaFormState.type,
      addMediaFormState.genre,
      addMediaFormState.completed,
      addMediaFormState.characters,
      addMediaFormState.comment
    ).then(result => {
      const submitResult = result.data;
      //do something with the data
      props.onSuccess();
    });
  };

  return (
    <Form className="justify-content-md-center">
      <Form.Row>
        <Form.Group as={Col} controlId="addFormMediaName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Media name"
            onChange={event =>
              setAddMediaFormState(state => ({
                ...state,
                name: event.target.value
              }))
            }
            value={addMediaFormState.name}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="addFormMediaType">
          <Form.Label>Type</Form.Label>
          <Form.Control
            as="select"
            defaultValue="Anime"
            onChange={event =>
              setAddMediaFormState(state => ({
                ...state,
                type: event.target.value
              }))
            }>
            <option>Anime</option>
            <option>Manga</option>
            <option>Game</option>
            <option>Show</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="addFormMediaGenre">
        <Form.Label>Genre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Media Genre"
          onChange={event =>
            setAddMediaFormState(state => ({
              ...state,
              genre: event.target.value
            }))
          }
          value={addMediaFormState.genre}
        />
      </Form.Group>

      <Form.Group controlId="addFormMediaCompleted">
        <Form.Check
          type="checkbox"
          id={"completed"}
          label={"Completed"}
          onChange={event =>
            setAddMediaFormState(state => ({
              ...state,
              completed: !addMediaFormState.completed
            }))
          }
          value={addMediaFormState.completed}
        />
      </Form.Group>

      <Form.Group controlId="addFormMediaCommment">
        <Form.Label>Comment</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          onChange={event =>
            setAddMediaFormState(state => ({
              ...state,
              comment: event.target.value
            }))
          }
          value={addMediaFormState.comment}
        />
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        onClick={handleSubmit}
        disabled={!isEnabled}>
        Add Media
      </Button>
    </Form>
  );
};

export default AddMediaForm;
