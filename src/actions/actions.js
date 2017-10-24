import moment from 'moment';
import firebase, {firebaseRef,storageRef} from 'app/firebase/';


//Adding new product to list
export var addProduct = (product) => {
  return {
    type: 'ADD_PRODUCT',
    product
  };
};

export var startAddProduct = (product) => {
  return (dispatch, getState) => {
    var productRef = firebaseRef.child('products').push(product);

    return productRef.then(() => {
      dispatch(addProduct({...product,
        id:productRef.key
      }));
    });
  };
};


//Adding new order
export var addOrder = (order) => {
  return {
    type: 'ADD_ORDER',
     order
  };
};
export var startAddOrder = (productID,userID,total) => {
  return (dispatch, getState) => {
    var orderRef = firebaseRef.child('orders').push(order);
    var order={
      productID,
      userID,
      orderAt: moment().unix(),
      shippedAt:null,
      canceledAt:null,
      quantity:1,
      total
    }
    return orderRef.then(() => {
      dispatch(addOrder({...order,
      orderRef.key}));
    });
  };
};



//Add to inventory
export var addInventory = (inventory) => {
  return {
    type: 'ADD_INVENTORY',
     inventory
  };
};

export var startAddInventoryDelivered = (order) => {
  return (dispatch, getState) => {
    var inventoryRef = firebaseRef.child('inventorys').push(inventory);
    var inventory={
      productID:order.productID,
      userId:order.userId,
      orderAt:order.orderAt,
      quantity:order.quantity,
      total:order.total,
      shippedAt:order.shippedAt,
      deliveredAt:moment().unix(),
      canceledAt:order.canceledAt
    }
    return inventoryRef.then(() => {
      dispatch(addInventory({...inventory,
      id:inventoryRef.key}));
    });
  };
};

export var startAddInventoryCanceled= (order) => {
  return (dispatch, getState) => {
    var inventoryRef = firebaseRef.child('inventorys').push(inventory);
    var inventory={
      productID:order.productID,
      userId:order.userId,
      orderAt:order.orderAt,
      quantity:order.quantity,
      total:order.total,
      shippedAt:order.shippedAt,
      deliveredAt:null,
      canceledAt:moment().unix()
    }
    return inventoryRef.then(() => {
      dispatch(addInventory({...inventory,
      id:inventoryRef.key}));
    });
  };
};


//Add user
export var addUser = (user) => {
  return {
    type: 'ADD_USER',
     user
  };
};

export var startAddUser = (user) => {
  return (dispatch, getState) => {
    var userRef = firebaseRef.child('users').push(user);
    return userRef.then(() => {
      dispatch(addUser({...user,
      id:userRef.key}));
    });
  };
};


//Add worker
export var addWorker = (worker) => {
  return {
    type: 'ADD_WORKER',
     worker
  };
};

export var startAddWorker = (worker) => {
  return (dispatch, getState) => {
    var workerRef = firebaseRef.child('workers').push(worker);

    return workerRef.then(() => {
      dispatch(addWorker({...worker,
      id:workerRef.key}));
    });
  };
};


//Updating product
export var updateProduct = (id, product) => {
  return {
    type: 'UPDATE_PRODUCT',
    id,
    product
  };
};

export var startUpdateProduct = (id, product) => {
  return (dispatch, getState) => {
    var productRef = firebaseRef.child(`products/${id}`);
    var product.quantity = product.quantity-1
    return productRef.update(product).then(() => {
      dispatch(updateProduct(id, product));
    });
  };
};



//Updating order
export var updateOrder = (id, order) => {
  return {
    type: 'UPDATE_ORDER',
    id,
    order
  };
};

export var startUpdateOrder = (id, order) => {
  return (dispatch, getState) => {
    var orderRef = firebaseRef.child(`orders/${id}`);
    var order.shippedAt = moment().unix();
    return orderRef.update(order).then(() => {
      dispatch(updateOrder(id, order));
    });
  };
};


//Updating user
export var updateUser = (id,user) => {
  return {
    type: 'UPDATE_USER',
    id,
    user
  };
};

export var startUpdateUser = (id, user) => {
  return (dispatch, getState) => {
    var userRef = firebaseRef.child(`users/${id}`);
    return userRef.update(user).then(() => {
      dispatch(updateUser(id, user));
    });
  };
};



//Updating worker
export var updateWorker = (id,worker) => {
  return {
    type: 'UPDATE_WORKER',
    id,
    worker
  };
};

export var startUpdateWorker = (id, worker) => {
  return (dispatch, getState) => {
    var workerRef = firebaseRef.child(`workers/${id}`);
    return workerRef.update(worker).then(() => {
      dispatch(updateWorker(id, worker));
    });
  };
};


//Getting products
function getProducts(products) {
  return {
    type: 'GET_PRODUCTS',
    products
  };
}


export function getStartProducts() {
  return (dispatch,getState) => {

    return firebaseRef.ref('products').once('value').then((snapshot)  => {
      const products = snapshot.val() || {};
      dispatch(getproducts(products))
    })
    .catch((error) => {
      console.log(error);
    });
  }
}


//Getting order
function getOrders(orders) {
  return {
    type: 'GET_ORDERS',
    orders
  };
}


export function getStartOrders() {
  return (dispatch, getState) => {

    return firebaseRef.ref('orders').once('value').then((snapshot) => {
      const orders = snapshot.val() || {};
      dispatch(getOrders(orders))
    })
    .catch((error) => {
      console.log(error);
    });
  }
}


//Getting user
function getUsers(users) {
  return {
    type: 'GET_USERS',
    users
  };
}


export function getStartUsers() {
  return (dispatch,getState) => {

    return firebaseRef.ref('users').once('value').then((snapshot) => {
      const users = snapshot.val() || {};
      dispatch(getUsers(users))
    })
    .catch((error) => {
      console.log(error);
    });
  }
}


//Getting worker
function getWorkers(workers) {
  return {
    type: 'GET_WORKERS',
    workers
  };
}


export function getStartWorkers() {
  return (dispatch,getState) => {

    return firebaseRef.ref('workers').once('value').then((snapshot) => {
      const workers = snapshot.val() || {};
      dispatch(getWorkers(workers))
    })
    .catch((error) => {
      console.log(error);
    });
  }
}


//Getting inventory
function getInventorys(inventorys) {
  return {
    type: 'GET_INVENTORYS',
    inventorys
  };
}


export function getStartInventorys() {
  return (dispatch,getState) => {

    return firebaseRef.ref('inventorys').once('value').then((snapshot) => {
      const inventorys = snapshot.val() || {};
      dispatch(getInventorys(inventorys))
    })
    .catch((error) => {
      console.log(error);
    });
  }
}


//Getting pages
