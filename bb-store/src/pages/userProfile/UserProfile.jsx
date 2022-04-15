import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const UserProfile = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (!isLoggedIn) {
            return navigate("/login");
        }
    }, [isLoggedIn])

    return ( 
        
        <section className="page-container">
        <h2 className="text-center"> User Profile </h2>
        </section>
     );
}
 
