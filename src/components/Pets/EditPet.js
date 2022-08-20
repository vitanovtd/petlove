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
import InputLogin from '../InputLogin';


const EditPet = () => {
    const ctx = useContext(PetContext);
    const { currentUser } = useContext(AuthContext);
    const pets = ctx.pets;

    const location = useLocation()
    const pet = location.state;
    const navigate = useNavigate();
    console.log(location);

    const inputs = [
        {
            id: 1,
            name: "name",
            type: "text",
            errorMessage: "Cannot be empty",
            label: "Name",
            required: true,
        },
        {
            id: 2,
            name: "bread",
            type: "text",
            errorMessage: "Cannot be empty",
            label: "bread",
            required: true,
        },
        {
            id: 3,
            name: "imageUrl",
            type: "text",
            errorMessage: "Should be a valid URL",
            label: "imageUrl",
            required: true,
        },
        {
            id: 4,
            name: "description",
            type: "text",
            errorMessage: "Should be at least 50 characters",
            label: "description",
            required: true,
        }
    ]

    const [values, setValues] = useState({
        name: pet.name,
        bread: pet.bread,
        imageUrl: pet.imageUrl,
        description: pet.description,
    })



    const { petId } = useParams()


    const correctPet = pets.find((pet) => pet.id === petId);

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }


    const handlerEditPet = async (e) => {
        e.preventDefault();
        if (!correctPet) {
            return;
        }
        console.log(currentUser.uid + 'before')
        console.log(correctPet.ownerId + 'before')

        if (currentUser.uid !== correctPet.ownerId) {

            navigate('/pets');
            return;

        }

        // UPDATE ONE
        ctx.updateCurrentPet({
            id: petId,
            name: values.name,
            bread: values.bread,
            imageUrl: values.imageUrl,
            description: values.description,
            likedBy: correctPet.likedBy || [],
            ownerId: currentUser.uid
        });


        navigate('/profile')
    }



    return (
        <div className="container">

            < h1 > Edit Pet</h1 >
            <div className={styles.almub}>
                <div className={styles['wrapper-form']}>
                    <div className={styles['space']}></div>
                    <form className='grid grid--2-cols' onSubmit={handlerEditPet}>
                        {inputs.map((input) => (
                            <InputLogin
                                key={input.id}
                                {...input}
                                value={values[input.name]}
                                onChange={onChange}
                            />
                        ))}
                        <div className={styles['btn-form-container']}>
                            <button className={styles['submit-button']}>Edit</button>

                        </div>
                    </form>

                </div>
            </div>

        </div>
    );
}


export default EditPet;