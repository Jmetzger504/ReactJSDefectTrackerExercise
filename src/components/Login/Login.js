import {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './Login.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Form} from 'react-bootstrap';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import {useHistory} from 'react-router-dom';
const Login = () => {

  const [credentials,setCredentials] = useState({username: "", password: ""});
  const navigate = useNavigate();

  const loginChange = (event) => {
    let tempCredentials = Object.assign({},{[event.target.name]: event.target.value})
    setCredentials(tempCredentials);
  }

  const login = (event) => {
    event.preventDefault();
    navigate('/dashboard');
  }


  return (
    <>
    <Form id = "form" onSubmit = {login}>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control name = "username" type="text" placeholder="Enter your username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name = "password" type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
    <br/>
    </>
      )

}

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
