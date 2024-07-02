function Item({ name, quantity, category }) {
    return (
        <li className="bg-gray-400 m-2">{name}<br /> Buy {quantity} in {category}</li>
    );
}
export default Item;