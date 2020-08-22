// import React, { createContext, useContext } from "react";
// import { useProductReducer } from './reducers';

//const { applyMiddleware } = require("redux");

// const StoreContext = createContext();
// const { Provider } = StoreContext;

// const store = ({ value = [], ...props }) => {
//     const [state, dispatch] = useProductReducer({
//         products: [],
//         cart: [],
//         cartOpen: false,
//         categories: [],
//         currentCategory: '',
//     });
//     // use this to confirm it works!
//     console.log(state);
//     return <Provider value={[state, dispatch]} {...props} />;
// };

// const useStoreContext = () => {
//     return useContext(StoreContext);
// };

// export { store };

import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const store = createStore(reducer, compose(
    applyMiddleware(thunk)
));

export { store };