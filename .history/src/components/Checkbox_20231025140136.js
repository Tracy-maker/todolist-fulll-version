import React from "react";
import firebase from "../firebase";

export const Checkbox = ({ id }) => {
  const archiveTask = () => {
    firebase
    .firestore()
    .collection("tasks")
    .doc(id)
    .update({ archived: true,
     });
  };
  return <div></div>;
};
