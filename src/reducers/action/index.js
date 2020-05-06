const actionType = {
    GET_PRODUCT:"GET_PRODUCT"
}

export const  getProduct = (id,size,description,image,price,category) =>({
    type: actionType.GET_PRODUCT,
    id: id,
    size: size,
    description: description,
    image: image,
    price: price,
    category: category,
  
})
