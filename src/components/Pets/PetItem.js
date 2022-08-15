import { Link } from 'react-router-dom';
import styles from '../Pets/PetItem.module.css';

const PetItem = ({ pet }) => {
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
                <Link to={`/pets/${pet.id}`} className={styles['card-btn']}>More</Link>
            </div>
        </div>
    );
}

export default PetItem;