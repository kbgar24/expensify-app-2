import React from 'react';

const EditExpensePage = (props) => {
  console.log(props);
  return (
    <div>
      This is from my edit expense component.

      Editing expense from {props.match.params.id}
    </div>
  )
};

export default EditExpensePage;
