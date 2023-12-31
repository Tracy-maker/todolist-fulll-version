import React from "react";
import firebase from "../firebase";

t const Checkbox = ({ id }) => {
  const archiveTask = () => {
    firebase.firestore().collection("tasks").doc(id).update({ archived: true });
  };
  return (
    <div
      className="checkbox-holder"
      data-testid="checkbox-action"
      onClick={() => archiveTask()}
    >
      <span className="checkbox"></span>
    </div>
  );
};
export default Checkbox
