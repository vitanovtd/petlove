import styles from '../Pets/AddNewPet.module.css'

const AddNewPet = () => {
    return (



        <div className="container">
            <h1>Add Pet</h1>
            <div className={styles.almub}>
                <form>
                    <label htmlFor="name">name</label>
                    <input type="text" name="name" />
                    <label htmlFor="bread">bread</label>
                    <input type="text" name="bread" />

                    <label htmlFor="imageUrl">Image URL</label>
                    <input type="text" name="imageUrl" placeholder="https://" />
                    <label htmlFor="description">description</label>
                    <input type="text" name="description" />
                </form>
            </div>
        </div>



    );





}


export default AddNewPet;