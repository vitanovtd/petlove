import { useContext, useState } from "react";

import { AuthContext } from "../context/AuthContext";
import { PetContext } from "../context/PetContext";
import PetItem from "./Pets/PetItem";

import styles from "../components/Profile.module.css"
import { Oval } from "react-loader-spinner";

const Profile = () => {
    const ctx = useContext(PetContext);
    const { currentUser } = useContext(AuthContext);

    const [isLoading, setLoading] = useState(true);
    const [petsList, setPetList] = useState([]);
    const [likedPets, setLikedPost] = useState([]);


    const pets = ctx.pets;

    if (petsList.length === 0) {
        setTimeout(async () => {
            setPetList(pets.filter((pet) => pet.ownerId === currentUser.uid));
            setLikedPost(pets.filter((pet) => pet.likedBy.includes(currentUser.uid)));
            setLoading(false);
        }, 3000);
    }

    return (
        <section className={styles['sectionProfile']}>
            <div className={styles['userEmail']}>
                Hello {currentUser.email}
            </div>
            <div className="container">
                <Oval
                    height={90}
                    width={90}
                    color="#fff"
                    wrapperClass="loader"
                    visible={isLoading}
                    ariaLabel="oval-loading"
                    secondaryColor="#fff"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                />

                {isLoading ? "" : < h3 className={styles['breeds-wrapper-title']}>You listed {petsList.length} Pets </h3>}
                <div className="grid grid--2-cols card-grid-wrapper">

                    {petsList.length > 0
                        ? petsList.map(pet => <PetItem key={pet.id} pet={pet} index={pets.indexOf(pet)} />)
                        : <h2></h2>
                    }

                </div>
                {isLoading ? "" : <h3 className={styles['breeds-wrapper-title']}> You liked {likedPets.length} Pets  </h3>}
                <div className="grid grid--2-cols card-grid-wrapper" >

                    {likedPets.length > 0
                        ? likedPets.map(pet => <PetItem key={pet.id} pet={pet} index={pets.indexOf(pet)} />)
                        : <h2></h2>
                    }

                </div>
            </div>
        </section >
    )

}


export default Profile;