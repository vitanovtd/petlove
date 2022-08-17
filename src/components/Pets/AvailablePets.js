import styles from '../Pets/AvailablePets.module.css';

import { PetContext } from '../../context/PetContext';
import { useContext } from 'react';

import PetItem from './PetItem';




const AvailablePets = () => {

    const ctx = useContext(PetContext);

    const pets = ctx.pets;
    return (
        <div className="container">
            <h3 className={styles['breeds-wrapper-title']}>Available Pets</h3>
            <div className="grid grid--2-cols card-grid-wrapper">
                {pets.length > 0
                    ? pets.map(pet => <PetItem key={pet.id} pet={pet} index={pets.indexOf(pet)} />)
                    : <h2>No pets available at this moment</h2>
                }
            </div>
        </div>
    )



    // fetch only 4 limited items 



}

export default AvailablePets;