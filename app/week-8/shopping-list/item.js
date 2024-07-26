function Item({ name, quantity, category, onSelect}) {
    return (
        <li className="bg-gray-400 m-2" onClick = {onSelect}>{name}<br /> Buy {quantity} in {category}</li>
    );
}
export default Item;