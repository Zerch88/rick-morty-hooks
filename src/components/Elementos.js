import React, { Component } from 'react';

class Elementos extends Component {

    pintarPersonajes = (pers)=>{
        return pers.map((p)=>{
            return(
                <div className="elemento-cont">
                    <img className="img-elemento" src={p.img} alt="" />
                    <div className="cont-data-destacado">
                        <h2>{p.name}</h2>
                        <p>{p.status}</p>
                        <p>{p.species}</p>
                    </div>
                </div>
            );
        });

    }

    render() {
        return (
            <div className="elementos-cont">
                {this.pintarPersonajes(this.props.personajes)}
            </div>


        );
    }
}

export default Elementos;