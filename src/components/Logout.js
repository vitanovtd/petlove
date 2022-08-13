import { getAuth, signOut } from "firebase/auth";
import { auth } from '../firebase';
import { useContext } from "react";
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();



    signOut(auth).then(() => {
        // Sign-out successful.

        dispatch({ type: "LOGOUT" })

    }).catch((error) => {
        // An error happened.
    });
    // local storage can be clean to remove values completly,   currently is setup witch dispatch at default value Null
    // should be in event to handle navigation to /
}





export default Logout;