import classes from "./ItemCount.module.css"
import { useState } from "react"

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)


    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity -1)
        }
    }

    return (
        <div className={`${classes.container}`}>
            <div className={`${classes.twoButtons}`}>
                <button className={`${classes.buttonsModify}`} onClick={decrement}>-</button>
                <h4>{quantity}</h4>
                <button className={`${classes.buttonsModify}`} onClick={increment}>+</button>
            </div>
            <div>
                <button className={`${classes.addToCart}`} onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount