import React from "react"
import { ICartItem } from "../../interfaces/ICartItem"

export interface CartItemProps {
    cartItem: ICartItem;
    onRemove(cartItem: ICartItem):void;
    onUpdateQuantity(cartItem: ICartItem):void;
}

class CartItem extends React.Component < CartItemProps, object > {
    handleRemove(e:React.MouseEvent<HTMLElement>) {
        this.props.onRemove(this.props.cartItem)
    }

    handleUpdateQuantity(e:React.MouseEvent<HTMLElement>,num:number ) {
        let newQuantity: number = this.props.cartItem.quantity + num;
        if(newQuantity < 0){
            newQuantity = 1
        }
        const newTotal: number = this.props.cartItem.product.price * newQuantity;
        const updatedCartItem: ICartItem = {
            product:this.props.cartItem.product,
            quantity: newQuantity, 
            totalPrice: newTotal
        }

        this.props.onUpdateQuantity(updatedCartItem)
    }

    render() {
        return (
            <div className="cartItem">
                <img src={this.props.cartItem.product.image} />
        
                <div className="cartItemTitle">
                <b>{this.props.cartItem.product.title}</b>
                </div>

                <div className="cartITemPrice">
                <p>{this.props.cartItem.product.price}:-</p>
                </div>

                <div className="quantityContainer">
                    <div className="counter"><span onClick={(e) => this.handleUpdateQuantity(e, -1)}>-</span></div>
                    <div className="cart-item-quantity">{this.props.cartItem.quantity}</div>
                    <div className="counter"><span onClick={(e) => this.handleUpdateQuantity(e, 1)}>+</span></div>

                </div>

                <div className="cartItemTotal">
                    <p>Total: <b>{this.props.cartItem.totalPrice}</b>:-</p>
                </div>
                
                <div className="cartRemove">
                    <button onClick={this.handleRemove.bind(this)} className="BtnRemoveItem">Ta bort</button>
                </div>
            </div>
          
        )
    }

}
export default CartItem