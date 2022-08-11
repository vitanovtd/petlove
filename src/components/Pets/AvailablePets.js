import styles from '../Pets/AvailablePets.module.css';


const AvailablePets = () => {
    return (
        <div className="container">
            <h3 className="breeds-wrapper-title">New breeds</h3>
            <div className="grid grid--2-cols card-grid-wrapper">
                <div className="card-wrapper grid grid--2-cols no-gap">
                    <div className="breeds-left">
                        <div className="wthree-almub"></div>
                    </div>
                    <div className="breeds-right back-color-blue">
                        <h4 className="card-title">Dolor Sit</h4>
                        <p className="card-paragraph">
                            Nsatolernatur auts oditaut miertase vertas.Measnseqe ustur magni
                            dolores eoqus ratione voluptate.
                        </p>
                        <button className="card-btn">More</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AvailablePets;