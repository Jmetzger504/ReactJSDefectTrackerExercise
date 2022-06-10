import axios from "axios";
export function loginAction(data) {
    return dispatch => {
        axios.get('http://localhost:4000/users')
        .then(response => {
        let users = response.data;
        let user = users.find(val => val.username === data.username && val.password === data.password);
        if(user) {
            console.log("Yay!");
            dispatch(logMeIn(true,user.role))
            
        }
        else {
            console.log("Nay...");
            dispatch(logMeIn(false,''));
        } 
        })
    }
}

export function logMeIn(loggedIn,role) {
    return {
        type: 'LOGIN',
        loggedIn: loggedIn,
        role: role
    }
}