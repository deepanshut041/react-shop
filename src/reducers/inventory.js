export function InventoryReducer(state = [], action) {
  switch(action.type) {
    case 'ADD_INVENTORY':
      return[...state,action.inventory];
    case 'GET_INVENTORYS':
      return [
        ...state,
        action.inventorys
      ];
    default:
      return state;
  }
}
