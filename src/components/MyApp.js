import React, {Component} from 'react';
import ElementoDestacado from './ElementoDestacado';
import Elementos from './Elementos';

class MyApp extends Component{

    constructor(){
        super();
        this.state = {
            destacado:{},
            personajes:[]
        }
        
    }

    getCharacter = ()=>{
        fetch('https://rickandmortyapi.com/api/character/'+(Math.floor(Math.random()*671)+1)) //+Math.floor(Math.random()*671)+1
        .then(response=>response.json())
        .then((data)=>{
            console.log(data);
            this.setState({
                destacado:{
                    id:data.id,
                    name:data.name,
                    status:data.status,
                    img:data.image,
                    species:data.species
                }
            })
        })
        .catch((err)=>{
            console.log(err);
        });    
    }

    componentDidMount(){
        console.log("SE Montó el Componente");
        this.getCharacter();
    }

    componentDidUpdate(){
        setTimeout(()=>{
            this.state.personajes.push(this.state.destacado);
            this.getCharacter();
        },5000)
        console.log(this.state.personajes);
    }

    render(){
        return(
            <div className="container">
                <h1>RICK & MORTY</h1>
                <ElementoDestacado personaje = {this.state.destacado}/>
                <Elementos personajes = {this.state.personajes}/>
            </div>
        );
    }
}

export default MyApp;