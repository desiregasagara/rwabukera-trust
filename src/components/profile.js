import React from "react"
import GeneralNav from "./GeneralNav";
import { getUser } from "../services/auth"
import { useAuthValue } from "./Auth/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "./Firebase/Firebase";

const Profile = () => {
    const { currentUser } = useAuthValue();
    return (
        <div>
        <GeneralNav/>
        <p>Welcome back to your profile, {currentUser.email}!</p>
        <p>
            This is a client-only route. You could set up a form to save information
            about a user here.
        </p>
        <span onClick={() => signOut(auth)}>Sign Out</span>
        </div>
    )
}

export default Profile

