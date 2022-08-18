import styles from '../Pets/AddNewPet.module.css'
import { collection, doc, setDoc, addDoc } from "firebase/firestore";
import { db } from '../../firebase';
import { Fragment, useEffect, useState } from 'react';
import { getAll } from '../../services/petService'
import { PetContext } from '../../context/PetContext'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import AvailablePets from './AvailablePets';


const EditPet = () => {
    const ctx = useContext(PetContext);
    const { currentUser } = useContext(AuthContext);
    const pets = ctx.pets;

    const location = useLocation()
    const navigate = useNavigate();

    console.log(location)





    const [name, setName] = useState("");
    const [bread, setBread] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [description, setDescription] = useState("");

    const { petId } = useParams()
    console.log(petId)
    console.log(ctx.pets);

    const correctPet = pets.find((pet) => pet.id === petId);




    const handlerEditPet = async (e) => {
        e.preventDefault();
        if (!correctPet) {
            return;
        }

        // UPDATE ONE
        ctx.updateCurrentPet({
            id: petId,
            name,
            bread,
            imageUrl,
            description,
            ownerId: currentUser.uid
        });


    }



    return (
        <div className="container">

            < h1 > Edit Pet</h1 >
            <div className={styles.almub}>
                <form onSubmit={handlerEditPet}>
                    <label htmlFor="name">name</label>
                    <input type="text" name="name" onChange={e => setName(e.target.value)} />
                    <label htmlFor="bread">bread</label>
                    <input type="text" name="bread" onChange={e => setBread(e.target.value)} />

                    <label htmlFor="imageUrl">Image URL</label>
                    <input type="text" name="imageUrl" placeholder="https://" onChange={e => setImageUrl(e.target.value)} />
                    <label htmlFor="description">description</label>
                    <input type="textarea" name="description" onChange={e => setDescription(e.target.value)} />
                    <button type="submit">Edit</button>
                </form>
            </div>

        </div>
    );
}


export default EditPet;