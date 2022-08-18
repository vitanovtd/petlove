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
            ownerId: currentUser.uid,
            likedBy: [],
        });


        navigate('/pets');
    }



    return (



        <div className="container">
            <h1>Add Pet</h1>
            <div className={styles.almub}>
                <div className={styles['wrapper-form']}>
                    <div className={styles['space']}></div>
                    <form className='grid grid--2-cols'>
                        <div className={styles['field-form']}>
                            <label className={styles['label-field']} htmlFor="name">name</label>
                            <input className={styles['input-field']} type="text" name="name" onChange={e => setName(e.target.value)} />
                            <label className={styles['label-field']} htmlFor="bread">bread</label>
                            <input className={styles['input-field']} type="text" name="bread" onChange={e => setBread(e.target.value)} />
                        </div>
                        <div className={styles['field-form']}>
                            <label className={styles['label-field']} htmlFor="imageUrl">Image URL</label>
                            <input className={styles['input-field']} type="text" name="imageUrl" placeholder="https://" onChange={e => setImageUrl(e.target.value)} />
                            <label className={styles['label-field']} htmlFor="description">description</label>
                            <input className={styles['input-field']} type="textarea" name="description" onChange={e => setDescription(e.target.value)} />
                        </div>
                    </form>
                    <div className={styles['btn-form-container']}>
                        <button className={styles['submit-button']} onClick={handleAddPet}>Add</button>
                        
                    </div>
                </div>
            </div>
        </div>



    );





}


export default AddNewPet;