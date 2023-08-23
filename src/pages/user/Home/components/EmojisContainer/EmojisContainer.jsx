export function EmojisContainer ({imgurl,titulo,parrafo, color}) {
    return (
    <div className="EmojisContainer" style={{background: color}}>
                
        <img src={imgurl} alt="" />
        <h1>{titulo}</h1>
        <p>{parrafo}</p>
    </div>
    )
}