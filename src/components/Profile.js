import { Fragment, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { PetContext } from "../context/PetContext";
import PetItem from "./Pets/PetItem";
import styles from "../components/Profile.module.css"

const Profile = () => {
    const ctx = useContext(PetContext);
    const { currentUser } = useContext(AuthContext);

    const pets = ctx.pets;



    const petsList = pets.filter((pet) => pet.ownerId === currentUser.uid)

    const likedPets = pets.filter((pet) => pet.likedBy.includes(currentUser.uid))

    console.log(petsList)
    console.log(likedPets)
    console.log(currentUser);

    return (

        <section className={styles['sectionProfile']}>
            <div className={styles['userEmail']}>
                Hello {currentUser.email}
            </div>
            <div className="container">
                <h3 className={styles['breeds-wrapper-title']}>You listed {petsList.length} Pets </h3>
                <div className="grid grid--2-cols card-grid-wrapper">

                    {petsList.length > 0
                        ? petsList.map(pet => <PetItem key={pet.id} pet={pet} index={pets.indexOf(pet)} />)
                        : <h2>No pets listed</h2>
                    }

                </div>
                <h3 className={styles['breeds-wrapper-title']}> You liked {likedPets.length} Pets  </h3>
                <div >

                    {likedPets.length > 0
                        ? likedPets.map(pet => <PetItem key={pet.id} pet={pet} index={pets.indexOf(pet)} />)
                        : <h2>You didn't like any pets</h2>
                    }

                </div>
            </div>
        </section>


    )

}


export default Profile;