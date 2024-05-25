import React from "react";
import { useState, useEffect } from 'react'
import '../AfficherSauce/AfficherSauce.css';
import card from "../../images/banner.png";
import { Link } from "react-router-dom";
import { Likes } from "../likes/like";
import { AjouterSauce } from "../AjouterSauces/AjouterSauce";



export const AfficherPublication = ({nom,prenom,imgp, id_pub, userId, description, image, nbrelike, nbredislke, tablike, tabDislike }) => {
    const token = localStorage.getItem("token")
    const id = localStorage.getItem("mot")
    const role = localStorage.getItem("role")
    console.log('role');
    console.log(role);
    const Supprimer = () => {
        console.log("supprimer");
        console.log(id_pub);
        fetch(`https://backend-mongodb-0jt7.onrender.com/auth/supprimer/${id_pub}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then((res) => res.json())
            .then(data => {
                console.log("oui supprimer avec succee")
                window.location.reload();
                //document.querySelector(".add").style.display = "block";
            })

    }

    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch("https://backend-mongodb-0jt7.onrender.com/auth/AfficherUser")
            .then((res) => res.json())
            .then((data) => {
                console.log("user");
                console.log(data);
                setUser(data)
            });

    }, []);

    return (
        <div className="card_flex">
            <div className="card">
                <span >
                    <div className="profileNom">
                        <img className="image_publier" src={imgp} alt="" />
                        <h3 className="nom_publier"> <span> {nom} </span> <span> {prenom} </span>  </h3>
                    </div>
                    <p className="texte">{description}</p>
                    <div className="icone">
                        {
                            userId === id ? <div>
                                <Link to={`/modifier/${id_pub}`}><i class="icon_modifier fa-solid fa-pen-to-square"></i></Link>
                                {/* <i onClick={Supprimer} class=" icon_supprimer fa-solid fa-trash-can"></i> */}
                            </div> : ""
                        }
                         {
                            userId === id || role === 'true' ? <div>
                                {/* <Link to={`/modifier/${id_pub}`}><i class=" icon_modifier fa-solid fa-pen-to-square"></i></Link> */}
                                <i onClick={Supprimer} class="icon_supprimer fa-solid fa-trash-can"></i>
                            </div> : ""
                        }
                    </div>
                    <img className="img" src={image} alt="" />
                    < Likes
                        id_pub={id_pub}
                        like={nbrelike}
                        dislike={nbredislke}
                        tabLike={tablike}
                        tabDisLike={tabDislike}
                    />
                </span>
            </div>
        </div>
    )

}