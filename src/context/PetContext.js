import { createContext, useEffect, useState } from "react";
import { getDoc } from "firebase/firestore";
import { addPet, getAll, updatePet } from "../services/petService";


export const PetContext = createContext({
    pets: [],
    addNewPet: (pet) => { },
    updateCurrentPet: (pet) => { }
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
        console.log(refPet);
        setPets((prevState) =>
            prevState.concat({
                ...docSnap.data()
            })
        );
    };

    const updateCurrentPet = async (pet) => {
        const result = await updatePet(pet)
        const index = pets.findIndex((p) => p.id === result.id)

        const updatedPets = [...pets]
        updatedPets[index] = { ...result, id: pet.id }

        setPets(updatedPets)
    }



    return (
        <PetContext.Provider
            value={{
                pets,
                addNewPet,
                updateCurrentPet
            }}>
            {props.children}
        </PetContext.Provider>
    );
} 