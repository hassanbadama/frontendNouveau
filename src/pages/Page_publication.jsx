import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AfficherPublication } from "../composants/AfficherSauce/AfficherPublication";
import { AjouterSauce } from "../composants/AjouterSauces/AjouterSauce";
import { Profile } from "../composants/profile/profile";
import { Header } from "../composants/Header/Header";

export const Page_publication = () => {
    const [elements, setElements] = useState([]);
    const [user, setUser] = useState([]);
    const token = localStorage.getItem("token")
    const id = localStorage.getItem("mot")

    useEffect(() => {
        fetch("https://backend-mongodb-0jt7.onrender.com/auth/afficher")
            .then((res) => res.json())
            .then((data) => {
                console.log("elemets");
                console.log(data);
                setElements(data)
            });
        fetch("https://backend-mongodb-0jt7.onrender.com/auth/AfficherUser")
            .then((res) => res.json())
            .then((data) => {
                console.log("user");
                console.log(data);
                setUser(data)
            });

    }, []);



    return (
        <div>
            < Header />
            <div className=" flex">
                {
                    user.map(use => {
                        if (use._id === id) {
                            return(
                                < Profile
                                nom={use.nom}
                                prenom={use.prenom}
                                image={use.file}
                                 />

                            )
                        }

                    })

                }
                <div className="flex_carde">
                    {
                        elements.map(element => {
                            return (
                                <div className="flex_card" key={element._id}>
                                    < AfficherPublication
                                        nom={element.nom}
                                        prenom={element.prenom}
                                        imgp={element.image_publication}
                                        id_pub={element._id}
                                        userId={element.userId}
                                        description={element.description}
                                        image={element.file}
                                        nbrelike={element.likes}
                                        nbredislke={element.dislikes}
                                        tablike={element.usersLiked}
                                        tabDislike={element.usersDisliked}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}