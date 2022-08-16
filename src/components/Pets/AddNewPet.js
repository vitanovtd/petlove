import styles from '../Pets/AddNewPet.module.css'
import { collection, doc, setDoc, addDoc } from "firebase/firestore";
import { db } from '../../firebase';
import { useState } from 'react';
import { getAll } from '../../services/petService'
import { PetContext } from '../../context/PetContext'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';



const AddNewPet = () => {
    const ctx = useContext(PetContext)
    const { currentUser } = useContext(AuthContext);


    const [name, setName] = useState("");
    const [bread, setBread] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();

    const handleAddPet = async (e) => {
        e.preventDefault();
        // await ctx.getAll()


        //Add new Pet 
        ctx.addNewPet({
            name,
            bread,
            imageUrl,
            description,
            ownerId: currentUser.uid
        });


        navigate('/');
    }



    return (



        <div className="container">
            <h1>Add Pet</h1>
            <div className={styles.almub}>
                <form onSubmit={handleAddPet}>
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


export default AddNewPet;