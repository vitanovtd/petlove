import { createContext, useEffect, useState } from "react";
import { getDoc } from "firebase/firestore";
import { addPet, getAll, updatePet } from "../services/petService";


export const PetContext = createContext({
    pets: [],
    addNewPet: (pet) => { },
    updateCurrentPet: (pet) => { },
    removePet: (petId) => { },
    likePet: (pet, userId) => { },
    unLikePet: (pet, userId) => { },
})

export const PetContextProvider = (props) => {
    const [pets, setPets] = useState([]);


    useEffect(() => {
        getAll().then((pets) => {
            const currentPets = [];

            pets.forEach((p) => {
                const pet = {
                    id: p.id,
                    ...p.data()
                }
                currentPets.push(pet)
            });
            setPets(currentPets);
        }).catch((error) => {
            console.log(error)
        })
    }, [])


    const addNewPet = async (pet) => {
        
        const refPet = await addPet(pet);
        const docSnap = await getDoc(refPet);

        setPets((prevState) =>
            prevState.concat({
                // ...docSnap.data()
                id: docSnap.id,
                name: docSnap.data().name,
                bread: docSnap.data().bread,
                imageUrl: docSnap.data().imageUrl,
                description: docSnap.data().description,
                ownerId: docSnap.data().ownerId,
                likedBy: docSnap.data().likedBy,
            })
        );
    };

    const likePet = async (pet, userId) => {

        // const index = pets.findIndex((p) => p.id === pet.id)
        // const newRef = [...pets];

        let likedBy = pet.likedBy || [];
        const updatedLikePet = { ...pet, likedBy: [...likedBy, userId] }

        await updateCurrentPet(Object.assign(updatedLikePet))

    }

    const unLikePet = async (pet, userId) => {
        const index = pets.findIndex((p) => p.id === pet.id);
        const newRef = [...pets];

        const likedIndex = pet.likedBy.findIndex((id) => id === userId);

        let likedBy = [...pet.likedBy];

        likedBy = [
            ...likedBy.slice(0, likedIndex),
            ...likedBy.slice(likedIndex + 1),
        ];

        const updatedPet = { ...pet, likedBy: likedBy };
        console.log(updatedPet)
        // console.log(Object.assign(updatedPet))
        await updateCurrentPet(updatedPet);
    }

    const updateCurrentPet = async (pet) => {
        console.log(pet)
        const result = await updatePet(pet)
        const index = pets.findIndex((p) => p.id === result.id)

        const updatedPets = [...pets]
        updatedPets[index] = { ...result, id: pet.id }


        setPets(updatedPets)
    }

    const removePet = (petId) => {
        setPets((prevState) => prevState.filter((pet) => pet.id !== petId));
    };



    return (
        <PetContext.Provider
            value={{
                pets,
                addNewPet,
                updateCurrentPet,
                removePet,
                likePet,
                unLikePet,
            }}>
            {props.children}
        </PetContext.Provider>
    );
} 