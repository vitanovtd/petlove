import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles['adopt-flex']}>
            <div className="left">
                <img src="../assets/img/p1.png" alt="" />
            </div>
            <div className="container">
                <h3 className="heading-tertiary">A shelter pet wants to meet you</h3>
                <p className="heading-tertiary contrast-color">
                    save a life. Adopt a shelter pet.
                </p>
            </div>
            <div className={styles['img-holder']}>
                <img src="../assets/img/puppy.png" className={styles['img-responsive']} alt="doggo-pet" />
            </div>
        </div>

    )
}


export default Home;