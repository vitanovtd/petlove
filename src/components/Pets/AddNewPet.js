import styles from '../Pets/AddNewPet.module.css'

const Pets = () => {
    return (


        <section classname="add-pet">
            <form onsubmit="{onSubmitDestinationsHandler}">
                <label>Destination name:</label>
                <input type="text" name="petName" placeholder="Pet Name" />
                <label htmlfor="bread">Bread:</label>
                <input type="text" id="bread" name="bread" placeholder="bread" />
                <label htmlfor="imgUrl">Image:</label>
                <input type="text" name="imgUrl" placeholder="https://" />
                <label htmlfor="description">Description: </label>
                <input type="text" name="description" placeholder="Description" />
                <input type="submit" classname="create" defaultValue="Add" />
            </form>
        </section>


    );
}


export default Pets;