import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddStudent = () => {
  const [name, setName] = useState("");

  async function addStudentToDb(newStudent) {
    let res = await axios.post("http://localhost:8000/students", newStudent);
    alert("Added succesfully!");
  }

  const handleSave = () => {
    let newObj = {
      name: name,
      created_at: Date.now(),
    };
    addStudentToDb(newObj);
  };

  return (
    <div>
      <Form.Control
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="name"
      />
      <Button onClick={handleSave}>ADD</Button>
    </div>
  );
};

export default AddStudent;
