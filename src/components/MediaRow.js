import React from "react";

const MediaRow = props => {
  return (
    <tr>
      <td>{props.media.name}</td>
      <td>{props.media.type}</td>
      <td>{props.media.genre}</td>
      <td>{props.media.completed}</td>
      <td>Characters</td>
      {/* TODO Add link that opens list of media characters below the row. Will show number of characters*/}
      <td>{props.media.comment}</td>
      {/* TODO Add link that opens comment about the media below the row. Will show if there's a comment or not */}
    </tr>
  );
};

export default MediaRow;
