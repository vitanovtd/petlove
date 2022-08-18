import { useContext, useEffect, useState } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { PetContext } from '../../context/PetContext';
import styles from '../Pets/PetDetails.module.css';
import { AuthContext } from '../../context/AuthContext';
import { deletePet, getOne } from '../../services/petService';



const PetDetails = () => {
    const { currentUser } = useContext(AuthContext);
    const ctx = useContext(PetContext);


    const { petId } = useParams();

    const [pet, setPet] = useState({});
    const [isLiked, setIsLiked] = useState(null);

    const [confirmDelete, setConfirmDelete] = useState(false);

    const navigate = useNavigate();

    // const pets = ctx.pets;

    // // const filteredPet = pets.find((pet) => pet.id === petId);

    // // console.log(filteredPet);
    console.log(pet)
    console.log(isLiked)
    console.log(pet.likedBy)
    const isOwner = pet.ownerId === currentUser?.uid;
    useEffect(() => {

        getOne(petId).then((pet) => {

            setPet({ id: pet.id, ...pet.data() });


            console.log(pet)


            if (!pet.data().likedBy.includes(currentUser.uid)) {

                setIsLiked(false);
            } else {
                console.log('DARI')
                setIsLiked(true);
            }



        }).catch((error) => {
            console.log(error)
            navigate('/pets')
        })


    }, [ctx, petId, isLiked, currentUser.uid]);


    const editHandler = (e) => {
        e.preventDefault();

        navigate(`/pets/${petId}/edit`)
    }
    const likeHandler = async (e) => {
        console.log(pet)
        console.log(pet.id)
        e.preventDefault();



        if (isLiked) {

            setIsLiked(false);
            ctx.unLikePet(pet, currentUser.uid);
            //     const updatedLikedPet = pet.likedBy.push(currentUser.uid)

            //     ctx.updateCurrentPet(
            //         Object.assign(updatedLikedPet, updatedLikedPet.likedBy))
        } else {

            setIsLiked(true);
            ctx.likePet(pet, currentUser.uid);

        }
    }


    // const updateCurrentPet = async (pet) => {
    //     const result = await updatePet(pet)
    //     const index = pets.findIndex((p) => p.id === result.id)

    //     const updatedPets = [...pets]
    //     updatedPets[index] = { ...result, id: pet.id }

    //     setPets(updatedPets)
    // }

    // const removePet = (petId) => {
    //     setPets((prevState) => prevState.filter((pet) => pet.id !== petId));
    // };

    const deleteHandler = (e) => {
        e.preventDefault();

        deletePet(petId);
        ctx.removePet(petId);
        navigate('/pets')
    }





    return (

        <div className="container">
            <div className={styles["details"]}>
                <div className={styles["img-holder"]}>
                    <img src={pet.imageUrl} alt={pet.name} />
                </div>
                <div className={styles["description"]}>
                    <h4 className={styles["card-title"]}>{pet.name}</h4>
                    <p className={styles["desc-paragraph"]}>{pet.description}</p>
                    <div className={styles["btn-holder"]}>
                        {currentUser && !isOwner && (
                            <button className={styles["desc-btn"]} onClick={likeHandler}>
                                {isLiked ? "Liked" : "Like"}
                            </button>
                        )}
                        {isOwner && (
                            <button className={styles["desc-btn"]} onClick={editHandler}>
                                Edit{" "}
                            </button>
                        )}
                        {isOwner && (
                            <button className={styles["desc-btn-red"]} onClick={deleteHandler}>
                                Delete
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );



}


export default PetDetails;