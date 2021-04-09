import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import CharacterRow from "./CharacterRow";
import { getCharacters } from "../service";

const CharacterList = () => {
  const [characterListState, setcharacterListState] = useState([]);

  useEffect(() => {
    getCharacters().then(result => {
      setcharacterListState(result);
    });
  }, []);

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Name</th>
          {/* <th>Media</th> */}
          <th>Comment</th>
        </tr>
      </thead>
      <tbody>
        {characterListState.map(value => (
          <CharacterRow key={value._id} character={value} />
        ))}
      </tbody>
    </Table>
  );
};

export default CharacterList;
