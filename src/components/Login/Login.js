import {useEffect, useState} from 'react';
import styles from './Login.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Form} from 'react-bootstrap';
import { loginAction } from '../../actions/action';
import { connect } from 'react-redux';
import { store } from '../../stores/store';
import { Navigate } from 'react-router-dom';

const Login = (props) => {

  const state = store.getState();
  const [credentials,setCredentials] = useState({username: "", password: ""});
  const loginChange = (event) => {
    let tempCredentials = Object.assign({},credentials,{[event.target.name]: event.target.value})
    setCredentials(tempCredentials);
  }

  const login = (event,credentials) => {
    event.preventDefault();
    props.login(credentials);
  }

  useEffect(() => {},[state.user.loggedIn])

  return (
    <>
      {state.user.loggedIn ? 
        <Navigate to = "/dashboard"/> :
        <>
          <Form id = "form" onSubmit = {event => login(event,credentials)}>
            <Form.Group className="mb-3" controlId="formBasicUsername" onChange = {loginChange}>
              <Form.Label>Username</Form.Label>
              <Form.Control name = "username" type="text" placeholder="Enter your username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword" onChange = {loginChange}>
              <Form.Label>Password</Form.Label>
              <Form.Control name = "password" type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </>
      }
  </>
      )

}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.user.loggedIn,
    role: state.user.role
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => dispatch(loginAction(data))
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Login);
