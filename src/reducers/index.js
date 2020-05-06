    
import { combineReducers} from 'redux'
import getProduct from './product'
const allReducers = combineReducers({
    getProduct:getProduct
})
export default allReducers