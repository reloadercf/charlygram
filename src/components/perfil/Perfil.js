import  React, {Component} from 'react'
import { Divider } from 'antd';
import firebase from '../../firebase';
import PerfilDisplay from './PerfilDisplay';



class Perfil extends Component{
    state={
        isLogged:false,
        user:null
    }
    componentWillMount(){
        let user=localStorage.getItem('user');
        if(user){
            this.setState({isLogged:true, user})
        }
        else
        {
            this.setState({isLogged:false})
            this.props.history.push("/login");
        }
    }

    render(){
        return(
            <div>
                <PerfilDisplay
                   isLogged={this.props.isLogged}
                   {...this.props.user}
                />
            </div>
                 
        )
    }
}
export default Perfil;