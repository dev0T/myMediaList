import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { addCharacter, getMediasIds } from "../service";

const AddCharacterForm = props => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [addCharacterFormState, setAddCharacterFormState] = useState({
    name: "",
    comment: "",
    mediaId: ""
  });
  const [mediaList, setMediaList] = useState([]);

  useEffect(() => {
    getMediasIds().then(result => {
      setMediaList(result);
    });
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    setIsEnabled(false);
    addCharacter(
      addCharacterFormState.name,
      addCharacterFormState.comment,
      addCharacterFormState.mediaId
    ).then(result => {
      const submitResult = result.data;
      //do something with the data
      props.onSuccess();
    });
  };

  return (
    <Form className="justify-content-md-center">
      <Form.Group controlId="addFormCharacterName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="name"
          placeholder="Character name"
          onChange={event =>
            setAddCharacterFormState(state => ({
              ...state,
              name: event.target.value
            }))
          }
          value={addCharacterFormState.name}
        />
      </Form.Group>

      <Form.Group controlId="addFormCharacterType">
        <Form.Label>Media</Form.Label>
        <Form.Control
          required
          as="select"
          defaultValue="Choose existent media"
          onChange={event =>
            setAddCharacterFormState(state => ({
              ...state,
              mediaId: event.target.value
            }))
          }>
          {mediaList.map(media => (
            <option key={media._id} value={media._id}>
              {media.name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="addFormCharacterCommment">
        <Form.Label>Comment</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          onChange={event =>
            setAddCharacterFormState(state => ({
              ...state,
              comment: event.target.value
            }))
          }
          value={addCharacterFormState.comment}
        />
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        onClick={handleSubmit}
        disabled={!isEnabled}>
        Add Character
      </Button>
    </Form>
  );
};

export default AddCharacterForm;
