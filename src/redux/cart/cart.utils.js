export const addItemToCart = (cartItems, cartItemToAdd) => {
    //cartItems is our current state (array) and cartItemToAdd is the new item
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)
    //this function comparees the id of existing cartItems to the new cartItemToAdd id if it matches it will set it the existingCartItem otherwise it will be undefined
    if(existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
            )
    }
    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}
