import React from "react";
import firebase from "../../firebase";

export const Checkbox = ({ id }) => {
  const archivedTasks = () => {
    firebase.firestore().collection("tasks");
  };
  return <div></div>;
};
