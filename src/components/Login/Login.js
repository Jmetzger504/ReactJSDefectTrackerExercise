import {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './Login.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Form} from 'react-bootstrap';

const Login = () => {

  const [isValid,setIsValid] = useState(false);
  const [credentials,setCredentials] = useState({username: "", password: ""});

  const loginChange = (event) => {
    let tempCredentials = Object.assign({},{[event.target.name]: event.target.value})
    setCredentials(tempCredentials);
  }

  const login = () => {
    
  }


  return (
    <>
    <Form id = "form">
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control name = "username" type="text" placeholder="Enter your username" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
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
