import React, { Component } from 'react';
import MainComponent from './MainComponent';
import MainForm from './MainForm';
import Slide from './Slide';

// state: Es un estado de almacenamiento para cada componenete


class HomePage extends Component {
    
    state={
        user:{
            name: 'Eduardo',
            age:   '23 años',
            available: true,
            hobbies: ['videogames','dance', 'eat']
        },
        newHobbie: '',
        obj:''
        
    }
    addHobbie =(event) =>{
        event.preventDefault()
        let{user, newHobbie}=this.state
        user.hobbies.push(newHobbie)
        this.setState({user})
        console.log(user)
    }

    handleHobbieText=(event)=>{
        let{newHobbie}=this.state;
        newHobbie=event.target.value;
        this.setState({newHobbie})
        console.log(newHobbie)

    }
    
    handleText=(e)=>{
        let {user}=this.state
        let field= e.target.name
        user[field]=e.target.value
        this.setState({user})
        console.log(user)
    }



    render() {
        let {user,obj, newHobbie}=this.state;
        return (
            <div>
                <Slide/>
                <MainForm
                  newHobbie={newHobbie}
                  handleHobbieText={this.handleHobbieText}
                  addHobbie={this.addHobbie}
                  handleText={this.handleText}/>
                <MainComponent
                    {...user}
                />
            </div>
        );
    }
}

export default HomePage;
