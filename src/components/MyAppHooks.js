import React, { useState, useEffect } from 'react';
import ElemDestacadoHooks from './ElemDestacadoHooks';
import ElementosHooks from './ElementosHooks';
// import ElementoDestacado from './ElementoDestacado';
// import Elementos from './Elementos';

function MyAppHooks() {
    const [destacado, setDestacado] = useState({});
    const [ personajes ] = useState([]);
    const [run, setRun] = useState(false)

    const getCharacter = () => {
        fetch('https://rickandmortyapi.com/api/character/' + (Math.floor(Math.random() * 671) + 1)) //+Math.floor(Math.random()*671)+1
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setDestacado({
                    id: data.id,
                    name: data.name,
                    status: data.status,
                    img: data.image,
                    species: data.species
                });
            })
    }

    useEffect(() => {
        getCharacter();
    }, []);

    useEffect(() => {
        if(run)
        setTimeout(()=>{
            getCharacter();
            personajes.push(destacado);

        },2000);
        // setDestacado({id:'Y'})
        console.log("Entre al efect de destacado");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[destacado, run]);

    return (
        <div className="container">
            <h1>RICK & MORTY HOOKS </h1>
            <button 
                className="start-stop-btn" 
                onClick = {()=>setRun(true)}
                >Iniciar
            </button>
            <button 
                className= 'start-stop-btn'
                onClick = {()=>setRun(false)}
                >Parar
            </button>
            <ElemDestacadoHooks personaje={destacado} />
            <ElementosHooks personajes={personajes}/>
        </div>
    );
}

export default MyAppHooks;