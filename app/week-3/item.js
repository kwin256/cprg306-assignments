function Item({ name, quantity, category }) {
    return (
        <li>{name}<br /> Buy {quantity} in {category}</li>
    );
}
export default Item;