import React, {Component} from 'react'
import"./perfil.css"
import FontAwesome from 'react-fontawesome'
import { Card } from 'antd';

const PerfilDisplay =({displayName, email,photoURL})=>{
    return(
      <div className="perfil">
        <div className="box_perfil">
            <div className="cover">
                <h3>MI PERFIL</h3>
            </div>
        </div>
        <div className="flex">

               <Card title={displayName} extra={<a href="#">Editar</a>} style={{ width: 300 }}>
                    <p><img className="photo" src={photoURL}/></p>
                    <p>Email: {email}</p>
                </Card>

            <Card title="Hobiies"  style={{ width: 1000 }}>
                <h3>Estos son tus hobbies</h3>
            </Card>
        </div>
      
      
      </div>
    )
}

export default PerfilDisplay;



