import { Link } from 'react-router-dom';
import styles from '../Pets/PetItem.module.css';

const PetItem = ({ pet, index }) => {

    return (
        <div className='grid grid--2-cols no-gap card-grid-wrapper'>
            <div className={styles['breeds-left']}>
                <div className={styles['wthree-almub']}>
                    <img className={styles['card-image']} src={pet.imageUrl} alt={pet.name} />
                </div>
            </div>
            <div className={`${styles['breeds-right']} ${index % 2 != 0 ? styles['back-color-blue'] : styles['back-color-yellow']
                }`}>
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

{/* <div class="card-wrapper grid grid--2-cols no-gap">
<div class="breeds-left"> 
    <div class="wthree-almub">  
    </div>
</div>
<div class="breeds-right back-color-blue">
    <h4 class="card-title">Dolor Sit</h4>
    <p class="card-paragraph">Nsatolernatur auts oditaut miertase vertas.Measnseqe ustur magni dolores eoqus ratione voluptate.</p>
    <button class="card-btn">More</button>
</div>
</div> */}