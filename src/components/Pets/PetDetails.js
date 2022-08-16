import { useContext, useEffect, useState } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { PetContext } from '../../context/PetContext';
import styles from '../Pets/PetDetails.module.css';
import { AuthContext } from '../../context/AuthContext';
import { deletePet, getOne } from '../../services/petService';



const PetDetails = () => {

    const { petId } = useParams();

    const [pet, setPet] = useState({});

    const [confirmDelete, setConfirmDelete] = useState(false);

    const [isLiked, setIsLiked] = useState(null);


    const navigate = useNavigate();

    // const info = getOne(petId)
    // console.log(info)

    const ctx = useContext(PetContext);

    const { currentUser } = useContext(AuthContext);

    const isOwner = pet.ownerId === currentUser?.uid;

    const [liked, setLikes] = useState(null);

    useEffect(() => {
        getOne(petId).then((pet) => {
            setPet(pet);



        })

    }, [ctx, petId, currentUser]);


    console.log(ctx);

    const editHandler = (e) => {
        e.preventDefault();

        navigate(`/pets/${petId}/edit`)
    }

    console.log(pet.id)

    const deleteHandler = (e) => {
        e.preventDefault();

        deletePet(petId);
        ctx.removePet(petId);
        navigate('/pets')
    }





    console.log(isOwner);
    return (


        <div className="card-wrapper grid grid--2-cols no-gap">
            <div className={styles['breeds-left']}>
                <div className={styles['wthree-almub']}></div>
                <img src={pet.imageUrl} alt={pet.name} />
            </div>
            <div className={styles['breads-right']}>
                <h4 className={styles['card-title']}>{pet.name}</h4>
                <p className={styles['card-paragraph']}>
                    {pet.description}
                </p>
                {currentUser && !isOwner && (
                    <button className={styles['card-btn']} >{isLiked ? 'Liked' : 'Like'}</button>
                )
                }
                {isOwner &&
                    (<button className={styles['card-btn']} onClick={editHandler}>Edit </button>)
                }
                {isOwner &&
                    (<button className={styles['card-btn']} onClick={deleteHandler}>Delete</button>)
                }
            </div>
        </div>
    );



}


export default PetDetails;