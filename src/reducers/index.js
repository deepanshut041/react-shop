import { combineReducers } from 'redux';
import {CategoryReducer} from './category_reducer';
import {ProductReducer} from './product_reducer';
import {UserReducer} from './user_reducer';
import {WorkerReducer} from './worker_reducer';
import {InventoryReducer} from './inventory';


const rootReducer = combineReducers({
  category:CategoryReducer,
  product:ProductReducer,
  user:UserReducer,
  worker:WorkerReducer,
  inventory:InventoryReducer
});

export default rootReducer;
