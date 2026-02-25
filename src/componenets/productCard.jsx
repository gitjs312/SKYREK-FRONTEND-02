export default function ProductCard(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <img src={props.image} className="border-4"/>
            <p>price: {props.price} </p>
            <button>Buy now...</button>
        </div>
    )
}
