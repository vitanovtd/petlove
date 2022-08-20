import { useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { PetContext } from '../../context/PetContext'
import { AuthContext } from '../../context/AuthContext';

import InputLogin from '../InputLogin';
import styles from '../Pets/AddNewPet.module.css'


const AddNewPet = () => {

    const ctx = useContext(PetContext)
    const { currentUser } = useContext(AuthContext);


    const navigate = useNavigate();

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
            type: "url",
            errorMessage: "Should be a valid URL",
            label: "imageUrl",
            pattern: `(https://[^"]*?\)`,
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
        name: "",
        bread: "",
        imageUrl: "",
        description: "",
    })




    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }


    const handleAddPet = async (e) => {
        e.preventDefault();

        try {
            ctx.addNewPet({
                name: values.name,
                bread: values.bread,
                imageUrl: values.imageUrl,
                description: values.description,
                ownerId: currentUser.uid,
                likedBy: [],
            });
        } catch (error) {
            alert(error);
            console.log(error)
        }

        navigate('/pets');
    }



    return (

        <div className="container">
            <h1>Add Pet</h1>
            <div className={styles.almub}>
                <div className={styles['wrapper-form']}>
                    <div className={styles['space']}></div>
                    <form className='grid grid--2-cols' onSubmit={handleAddPet}>
                        {inputs.map((input) => (
                            <InputLogin
                                key={input.id}
                                {...input}
                                value={values[input.name]}
                                onChange={onChange}
                            />
                        ))}
                        <div className={styles['btn-form-container']}>
                            <button className={styles['submit-button']}>Add</button>

                        </div>
                    </form>

                </div>
            </div>
        </div>

    );

}


export default AddNewPet;