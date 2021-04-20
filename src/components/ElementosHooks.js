
const pintarPersonajes = (pers)=>{
    // console.log(pers);
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
const ElementosHooks = (props)=>{
    return (
        <div className="elementos-cont">
            {pintarPersonajes(props.personajes)}
        </div>
    );
}

export default ElementosHooks;