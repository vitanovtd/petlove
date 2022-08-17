import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { PetContext } from "../context/PetContext";
import PetItem from "./Pets/PetItem";

const Profile = () => {
    const ctx = useContext(PetContext);
    const { currentUser } = useContext(AuthContext);

    const pets = ctx.pets;



    const petsList = pets.filter((pet) => pet.ownerId === currentUser.uid)

    const likedPets = pets.filter((pet) => pet.likedBy.includes(currentUser.uid))



}


export default Profile;