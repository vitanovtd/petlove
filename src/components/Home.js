import { Fragment, useContext } from 'react';
import styles from './Home.module.css';
import { PetContext } from './../context/PetContext';
import PetItem from './Pets/PetItem';
const Home = () => {

    const ctx = useContext(PetContext);
    const pets = ctx.pets;

    const newRef = [...pets];
    const random = newRef.sort(() => Math.random() - 0.5).slice(0, 4)

    return (
        <Fragment>
            <div className="container">
                <h3 className="heading-primary center-align">About us</h3>
                <div className="grid grid--2-cols no-gap about-us">
                    <div className={styles['left-col']}>
                        <h2 className="heading-tertiary">Save a Pet</h2>
                        <h5 className="subheading italic-font">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                            eget faucibus est.
                        </h5>
                        <p className={styles['article-paragraph']}>
                            Suspendisse auctor urna blandit ultricies maximus. Sed accumsan auctor
                            lacus ac mattis. Mauris at nibh purus. Nullam vulputate, urna id
                            facilisis eleifend, nisl turpis suscipit augue, eget tincidunt velit
                            nunc ut lectus.
                            <span className="article-span">
                                Phasellus viverra nec augue at iaculis. Nullam scelerisque tincidunt
                                sapien vitae sodales. Sed tristique ut nulla a ultricies. Aliquam sit
                                amet sodales elit, et pellentesque lorem. Praesent quis nibh id arcu
                                porta lobortis.
                            </span>
                            Morbi rutrum ut risus sed hendrerit. Integer laoreet odio nec nisi
                            varius, at scelerisque nisi rhoncus.
                        </p>
                    </div>
                    <div className={styles['right-col']} />
                </div>
            </div>


            <div className={styles['adopt-flex']}>
                <div className="left">
                    <img src="../assets/img/p1.png" alt="" />
                </div>
                <div className="container">
                    <h3 className="heading-tertiary">A pet wants to meet you</h3>
                    <p className="heading-tertiary contrast-color">
                        Save a life. Adopt a pet.
                    </p>
                </div>
                <div className={styles['img-holder']}>
                    <img src="../assets/img/puppy.png" className={styles['img-responsive']} alt="doggo-pet" />
                </div>
            </div>


            <div className="container">
                <h3 className={styles['breeds-wrapper-title']}>Available Pets</h3>
                <div className="grid grid--2-cols card-grid-wrapper">
                    {random.length > 0
                        ? random.map(pet => <PetItem key={pet.id} pet={pet} index={random.indexOf(pet)} />)
                        : <h2>No pets listed</h2>
                    }

                </div>
            </div>
        </Fragment>


    )
}


export default Home;