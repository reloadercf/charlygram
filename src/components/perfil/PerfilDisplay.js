import React, {Component} from 'react'
import"./perfil.css"
import FontAwesome from 'react-fontawesome'


const PerfilDisplay =({displayName, email,photoURL})=>{
    return(
      <div className="perfil">
        <div className="box_perfil">
            <div className="cover">
                <h3>MI PERFIL</h3>
            </div>
        </div>
        <div className="flex">
            <div className="card">
                <div className="photo" style={{background}}></div>
                <p>Nombre: {displayName}</p>
                <p>Email: {email}</p>
            </div>
            <div className="hobbies">
                <h3>Estos son tus hobbies</h3>
            </div>
        </div>
      
      
      </div>
    )
}

export default PerfilDisplay;



