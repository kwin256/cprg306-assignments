import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";


const getItems = async (userId) => {
    const q = query(collection(db, "users", userId, "items"));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
        return [];
    }
    return querySnapshot.map( doc => ({id: doc.id, ...doc.data()}) );
}

const addItem = async (userId, item) => {
    const docRef = await addDoc(collection(db, "users", userId, "items"), item);
    return docRef.id;
}

export { getItems, addItem };