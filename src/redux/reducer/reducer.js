import { ADD, DELETE } from "../action-type/action-type"

const initialState = { 
    car:[{model:"BMW",price:10,id:1},{model:"clio",price:2,id:2}]
}

const reducer=(state = initialState, { type, payload }) => {
    
  switch (type) {

  case ADD:
    console.log(payload);
    return {...state, car: [...state.car,payload] }
    case DELETE:
    return { ...state, car: state.car.filter(elt=>elt.id!=payload) }
  default:
    return state
  }
}
export default reducer