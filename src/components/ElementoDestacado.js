import React, {Component} from 'react';

class ElementoDestacado extends Component{

    render(){
        console.log(this.props);
        const{id,name,status,img,species}=this.props.personaje;
        return(
            <div id= {id} className="elemento-destacado-cont">
                <img className="img-destacado" src={img} alt=""/>
                <div className="cont-data-destacado">
                    <h2>{name}</h2>
                    <p>{status}</p>
                    <p>{species}</p>
                </div>
            </div>
        );
    }
}

export default ElementoDestacado;