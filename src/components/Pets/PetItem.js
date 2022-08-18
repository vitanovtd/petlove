import { Link } from 'react-router-dom';
import styles from '../Pets/PetItem.module.css';




const PetItem = ({ pet, index }) => {


    // const moreHanlder = (e) => {
    //     e.preventDefault();
    //     navigate(`/pets/${pet.id}`)
    // }

    return (
        <div className="grid grid--2-cols no-gap card-grid-wrapper">
            <div className={styles["breeds-left"]}>
                <img
                    className={styles["card-image"]}
                    src={pet.imageUrl}
                    alt={pet.name}
                />
            </div>
            <div
                className={`${styles["breeds-right"]} ${index % 2 != 0
                    ? styles["back-color-blue"]
                    : styles["back-color-yellow"]
                    }`}
            >
                <h4 className={styles["card-title"]}>{pet.name}</h4>
                <p className={styles["card-paragraph"]}>{pet.description}</p>
                <Link to={`/pets/${pet.id}`} className={styles["card-btn"]}>
                    More
                </Link>

                {/* <button className={styles["card-btn"]} onClick={moreHanlder}>
                    More
                </button> */}

            </div>
        </div>
    );
}

export default PetItem;

