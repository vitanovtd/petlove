import { db } from "../firebase";
import { collection, doc, getDocs, addDoc, setDoc, getDoc, deleteDoc } from "firebase/firestore";


export async function addPet(data) {
    return await addDoc(collection(db, "pets"), data)
}


export async function getOne(petId) {

    const docRef = (doc(db, "pets", petId));
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return docSnap;
    } else {
        return console.log('No such document')
    }

}

export async function getAll() {
    
    const querySnapshot = await getDocs(collection(db, "pets"));
    return querySnapshot;
}

export async function updatePet(pet) {

    await setDoc(doc(db, "pets", pet.id), {
        ...pet
    });
    const docRef = doc(db, "pets", pet.id);
    const docSnap = await getDoc(docRef);
    return docSnap.data();

}

export async function deletePet(petId) {
    return await deleteDoc(doc(db, "pets", petId));
}


