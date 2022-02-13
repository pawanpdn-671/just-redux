//Importing redux
const redux = require ('redux');

//Initializing the store and combine reducers
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

//Assigning the action type in variables
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

//Action creator
function buyCake() {
   return {
      type: BUY_CAKE
   }
}

function buyIceCreams() {
   return {
      type: BUY_ICECREAM
   }
}

//initializing states
const initial_cake_state = {
   numOfCakes: 10
}
const initial_ice_cream_state = {
   numOfIceCream: 20
}

//Reducers
const cake_reducer = (state = initial_cake_state, action) => {
   switch(action.type) {
      case BUY_CAKE: return {
         ...state,
         numOfCakes: state.numOfCakes - 1
      }

      default: return state
   }
}

const ice_cream_reducer = (state = initial_ice_cream_state, action) => {
   switch(action.type) {
      case BUY_ICECREAM: return {
         ...state,
         numOfIceCream: state.numOfIceCream - 1
      }

      default: return state
   }
}

//Combining reducers and assigning it to store
const rootReducer = combineReducers({
   cake: cake_reducer,
   iceCream: ice_cream_reducer
});

const store = createStore(rootReducer);

console.log('initial state', store.getState());

const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCreams());
store.dispatch(buyIceCreams());

unsubscribe();