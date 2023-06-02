import {
  getFirestore,

  collection,

  addDoc
} from "firebase/firestore";




export const createOrder = async (items, total, name, email, adress) => {

    const order = {
    buyer: { name: name ,  email: email, adress: adress },
    cart: items,
    total: total

  };

  const db = getFirestore()   
  const orderCollection = collection(db, 'orders')
  addDoc(orderCollection,order).then(({ id }) => {
    console.log(order)
   return id ;
  } )

};







