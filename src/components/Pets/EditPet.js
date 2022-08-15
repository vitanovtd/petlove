import styles from '../Pets/AddNewPet.module.css'
import { collection, doc, setDoc, addDoc } from "firebase/firestore";
import { db } from '../../firebase';
import { useState } from 'react';
import { getAll } from '../../services/petService'
import { PetContext } from '../../context/PetContext'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';


const EditPet = () => {
    const ctx = useContext(PetContext);
    const { currentUser } = useContext(AuthContext);


    const [name, setName] = useState("");
    const [bread, setBread] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [description, setDescription] = useState("");


    const handlerEditPet = async (e) => {
        e.preventDefault();

        // UPDATE ONE
        ctx.updateCurrentPet({
            id: ctx.pets[1].id,
            name,
            bread,
            imageUrl,
            description,
            ownerId: currentUser.uid
        });


    }



    return (




        <div className="container">
            <h1>Add Pet</h1>
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
                    <button type="submit">Add</button>
                </form>
            </div>
        </div>
    );
}


export default EditPet;