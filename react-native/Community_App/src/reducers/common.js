  /* @flow */
// import Reactotron from 'reactotron';
import { Actions } from 'react-native-router-flux'

const SHOWLOADER = 'SHOWLOADER'
const HIDELOADER = 'HIDELOADER'
const DEFAULT_STATE= {
  loaderVisible: false
}


export default function common(state = DEFAULT_STATE, action ) {
  // Reactotron.log("Common " + state);
  switch (action.type) {
    case SHOWLOADER:
      return Object.assign({}, state, {loaderVisible: true})
    case HIDELOADER:
      return Object.assign({}, state, {loaderVisible: false}) 
    default:
      return state
  }
}

// var _showLoader = () => ({
//     type:SHOWLOADER
// });

// var _hideLoader = () => ({
//     type:HIDELOADER
// });




// const commonActions = {
//   showLoader:() =>{
//     return function(dispatch){
//       dispatch(_showLoader());
//     }
//   },
//   hideLoader:() =>{
//     return function(dispatch){
//       dispatch(_hideLoader());
//     }
//   }

// }

// export { commonActions }
