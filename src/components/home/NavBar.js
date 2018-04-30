import React, {Component} from 'react';
import {Link} from 'react-router-dom'

/*
<Link to="/">Home</Link>
{" | "}
<Link to="/perro">Perro</Link>
{" | "}
<Link to="/perro2">Perro2</Link>
    <Link to="/perro"><span>Perro</span></Link>
    <Link to="/perro2"><span>Perro2</span></Link>            
                   
*/
class NavBar extends Component{
    render(){
        return (
             <div className="nav">
                 <img src="https://www.shareicon.net/download/2017/02/15/879058_media_512x512.png" alt="imagen"/>
                    <Link to="/"><span>Home</span></Link>
                
                    <div style={{display:"flex", alignItems:"center"}}>
                        <hr className="line"/>
                        <Link to="/login"><span>Login</span></Link>                       
                    </div>
          
             </div>
        )
    }
}

export default NavBar