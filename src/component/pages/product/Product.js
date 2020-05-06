import React, {Component} from 'react'
import {data} from '../../../API/data'
export default class Product extends Component{

state = {
    data:data,
    selectedData: "",
    productList:[]
}

handlerSelectedData = (e)=>{
    const category = e.target.id
 let newData =[] 
 this.state.data.products.filter(item=> {if(item.category === category)newData.push(item) })
 this.setState({productList:newData})
}
handlePriceHighLow =()=>{
   const sortHighLow = this.state.productList.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
console.log(sortHighLow)
}
handlePriceLowHigh =()=>{
    const sortLowHigh = this.state.productList.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
 console.log(sortLowHigh)
 }
    render(){
        return(

<div>
    <ul>
        <li> <button id="party" onClick={this.handlerSelectedData}> Party</button></li>
        <li>lounge</li>
        <li>casual</li>
        <li>evening</li>
        <li>active</li>
    </ul>

    <button onClick={this.handlePriceHighLow}>High to Low</button>
    <button onClick={this.handlePriceLowHigh}> Low High</button>

{this.state.productList.map((product,i) =>
    <div key={i}>
    <p>{product.price}</p>
<img src={product.image} alt={product.id}/>
</div>
)}
</div>
        )
    }
}