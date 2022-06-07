import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './AddDefect.module.css';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const AddDefect = () => {
  
  const [category, setCategory] = useState('UI');
  const [description,setDescription] = useState('');
  const [priority,setPriority] = useState('3');

  const newDefect = (category,description,priority) => {
    let newDefect = {"category": category, "description": description, "priority": priority, "status": "Open"};
    console.log(newDefect);
    axios.post('defects.json',newDefect)
    .then(console.log("Yay!"))
    .catch(error => console.log(error));
  }
  
  return (
    <>
    <h2>Add Defect</h2>
  <Form id = "form">
  <Form.Group className = "mb-3">
    <Form.Label>Defect Category</Form.Label>
    <Form.Select onChange = {(event) => setCategory(event.target.value)}>
      <option value = "UI">UI</option>
      <option value = "Functional">Functional</option>
      <option value = "Change Request">Change Request</option>
    </Form.Select>
  </Form.Group>
  <Form.Group className = "mb-3">
    <Form.Label>Description</Form.Label>
    <Form.Control as = "textarea" rows = {3} onChange = {(event) => setDescription(event.target.value)}></Form.Control>
  </Form.Group>
  <Form.Group className='mb-3'>
    <Form.Label>Priority Level</Form.Label>
    <Form.Select onChange = {(event) => setPriority(event.target.value)}>
      <option value = "3">3</option>
      <option value = "2">2</option>
      <option value = "1">1</option>
    </Form.Select>
  </Form.Group>
    <Button variant = "primary" type = "submit">Submit</Button>
  </Form>
  </>
);}

AddDefect.propTypes = {};

AddDefect.defaultProps = {};

export default AddDefect;
