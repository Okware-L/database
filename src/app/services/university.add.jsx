import { universities } from "../../../firebase";

import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
  } from "firebase/firestore";

//will give me reference of my collection, which is the universities
  const uniCollectionRef = collection(universities, "universities");
  class uniDataservice{
    addUni = (newUni) => {
        return addDoc(uniCollectionRef, newUni);
    }

    updateUni = (id, updatedUni) => {
        const uniDoc = doc(universities, "universities", id);
        return updateDoc(uniDoc, updatedUni);
    }

    deleteUni = (id) => {
        const uniDoc = doc(universities, "universities", id);
        return deleteDoc(uniDoc);
    }

    getAllUni = () => {
        return getDocs(uniCollectionRef);
    }

    //individual
    getUni = (id) => {
        const uniDoc = doc(universities, "universities", id);
        return getDoc(uniDoc);
    }
  }
  export default new uniDataservice();