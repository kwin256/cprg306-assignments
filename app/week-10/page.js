"use client"
// Import the useUserAuth hook
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";
 

export default function Page() {
    // Use the useUserAuth hook to get the user object and the login and logout functions
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    if (!user) {
        return (
            <button onClick={gitHubSignIn}>Sign in with GitHub</button>
        );
    }


    return (
        <div className="p-2">

            <p>
                Welcome, {user.displayName} ({user.email})  
            </p>
            <button className=" bg-blue-300 m-2 text-2xl" onClick={firebaseSignOut}>Sign out</button> 
            <Link className=" bg-blue-300 m-2 text-2xl" href="/week-10/shopping-list">Shopping List</Link>
        </div>
    );


}