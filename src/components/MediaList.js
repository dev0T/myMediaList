import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import MediaRow from "./MediaRow";
import { getMedias } from "../service";

const MediaList = () => {
  const [mediaListState, setMediaListState] = useState([]);
  
  useEffect(() => {
    getMedias().then(result => {
      setMediaListState(result);
    });

  }, []);

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Name</th>
          <th>Media Type</th>
          <th>Genre</th>
          <th>Completed</th>
          <th>Characters</th>
          <th>Comment</th>
        </tr>
      </thead>
      <tbody>
        {mediaListState.map(value => (
          <MediaRow key={value._id} media={value} />
        ))}
      </tbody>
    </Table>
  );
};

export default MediaList;
