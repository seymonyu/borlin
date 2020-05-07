import React from 'react'
import "../../stylesheets/cartMenu.scss"
import {data} from '../../API/data'



class CartMenu extends React.Component {
state={
    data:data.products
}

    render()
    {return (

        <div className={this.props.basketOn?'cartMenu--side-body':'cartMenu--hide-body'}>
           
        </div>
    )}
}
export default CartMenu