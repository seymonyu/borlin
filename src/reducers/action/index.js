const actionType = {
    GET_PRODUCT:"GET_PRODUCT"
}

export const  getProduct = (filteredProduct) =>({
    type: actionType.GET_PRODUCT,
    id: filteredProduct.id,
    size: filteredProduct.size,
    description: filteredProduct.description,
    image: filteredProduct.image,
    price: filteredProduct.price,
    category: filteredProduct.category,
  
})
