import  React, {Component} from 'react'
import LoginDisplay from './LoginDisplay';
import { Divider } from 'antd';
import firebase from '../../firebase';



class Login extends Component{

componentDidMount(){
        window.scroll(0,0)
}

componentWillMount(){
    firebase.auth().getRedirectResult()
        .then(result=>{
            if(!result.user) return;
            console.log(result.user);
            localStorage.setItem("user", JSON.stringify(result.user));
            this.props.loginAction(result.user);
            this.props.history.push("/perfil");
        }).catch(function(error){
            console.log(error)
        });
}

loginGoogle=()=>{
    const provider =new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
}

    render(){
        return(
            <div>
                <LoginDisplay
                loginGoogle={this.loginGoogle}
                    />
            </div>
            
           
        )
    }
}
export default Login;