import React from "react";

const CharacterRow = props => {
  return (
    <tr>
      <td>{props.character.name}</td>
      {/* <td>{props.character.media}</td> */}
      {/* TODO Add link to the media that lists all characters? */}
      <td>{props.character.comment}</td>
      {/* TODO Add link that opens comment about the media below the row. Will show if there's a comment or not */}
    </tr>
  );
};

export default CharacterRow;
