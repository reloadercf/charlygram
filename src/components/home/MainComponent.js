import React from 'react'

//map es una funcion que funciona como lopp para hacer referenca

const MainComponent =({hobbies,name, age, available})=>{
    return(
        <div>
            <p>Nombre: {name}</p>
            <p>Edad:{age}años/ {age>30?'Solterin':'Tienes chance'}</p>
            <p> Estado Civil: {available?'Solteron':'En una Relacion'}</p>
            <h3>My hobbies</h3>
            <ul>
            {hobbies.map((hobbie, key)=>(
                <li key={key} >{hobbie}</li>
            ))}

            </ul>            
           
        </div>
    )
}

export default MainComponent;


