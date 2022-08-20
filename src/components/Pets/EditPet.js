import { useState } from "react";
import { useContext } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { PetContext } from "../../context/PetContext";
import { AuthContext } from "../../context/AuthContext";

import InputLogin from "../InputLogin";
import styles from "../Pets/EditPet.module.css";

const EditPet = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const ctx = useContext(PetContext);
    const { currentUser } = useContext(AuthContext);

    const pets = ctx.pets;
    const pet = location.state;

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
            placeholder: "Image url",
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
        },
    ];

    const [values, setValues] = useState({
        name: pet.name,
        bread: pet.bread,
        imageUrl: pet.imageUrl,
        description: pet.description,
    });

    const { petId } = useParams();

    const correctPet = pets.find((pet) => pet.id === petId);

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const cancelHandler = (e) => {
        e.preventDefault();

        navigate("/pets");
    };

    const handlerEditPet = async (e) => {
        e.preventDefault();
        if (!correctPet) {
            return;
        }

        if (currentUser.uid !== correctPet.ownerId) {
            navigate("/pets");
            return;
        }

        // UPDATE ONE
        try {
            ctx.updateCurrentPet({
                id: petId,
                name: values.name,
                bread: values.bread,
                imageUrl: values.imageUrl,
                description: values.description,
                likedBy: correctPet.likedBy || [],
                ownerId: currentUser.uid,
            });

        } catch (error) {
            console.log(error)
        }

        navigate("/profile");
    };

    return (
        <div className="container">
            <h1> Edit Pet</h1>
            <div className={styles.almub}>
                <div className={styles["wrapper-form"]}>
                    <div className={styles["space"]}></div>
                    <form className="grid grid--2-cols grid--center--v" onSubmit={handlerEditPet}>
                        {inputs.map((input) => (
                            <InputLogin
                                key={input.id}
                                {...input}
                                value={values[input.name]}
                                onChange={onChange}
                            />
                        ))}
                        <div className={styles["btn-form-container"]}>
                            <button className={styles["cancel-button"]} onClick={cancelHandler}>
                                Cancel
                            </button>
                        </div>
                        <div className={styles["btn-form-container"]}>
                            <button className={styles["submit-button"]}>Edit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditPet;
