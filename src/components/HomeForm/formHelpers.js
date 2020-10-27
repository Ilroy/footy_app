import { changeRoute, setUser } from '../../containers/App/appActions';

export const getOnSubmitSignIn = dispatch => (email, password) =>{
    console.log("in")
    fetch('http://localhost:3000/signin', {
       method: 'post',
       headers: {'Content-Type': 'application/json'},
       body: JSON.stringify({
           email: email,
           password:password
       })
   })
   .then(response => response.json())
   .then(user => {
       dispatch(setUser(user));
   });

};

export const getOnSubmitRegister = dispatch => (email, password, firstName, lastName) =>{
    
    fetch('http://localhost:3000/register', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            email: email,
            password:password,
            firstName: firstName,
            lastName: lastName
        })
    })
    .then(response => response.json())
    .then(message => {
        console.log(message);
        message === "success"? dispatch(changeRoute("signIn")) : console.log("couldnt register");
    });
};