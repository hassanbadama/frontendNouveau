import React from "react";
import '../conexion/connexion.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";



export const Conexion = ({valide})=>{
    const [mot, setMot] = useState(""); 
    const [email, setEmail] = useState(""); 
    const Na = useNavigate()
    const {id} = useParams()
   
  const Utilisateur = async (e) => { 
    console.log(mot +"=="+email);
     e.preventDefault();
    const data = {
        mot:mot,
        email:email
       
      }
     fetch("https://backend-mongodb-0jt7.onrender.com/auth/connexion", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      }).then((res) => res.json()) 
       .then((data) =>{
        console.log("il ya erreur ==");
         console.log(data.role)
         if (data.token) {
            localStorage.setItem("mot", data.userId)
            localStorage.setItem("token", data.token)
            localStorage.setItem("role", data.role)
            console.log("redirectionnn");
            Na("/afficher")
         }
       })
   }

    return(
        <div className="connexion"> 
        <h5 className="information">Entrer vos informations pour la connection</h5>
            <form onSubmit={Utilisateur} className="form" action="">
                <label htmlFor="">Mot de Passe</label>
                <input type="password" name="mot" value={mot} onChange={(e) => setMot(e.target.value)} />
                <label htmlFor="">Email</label>
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="submit" value={valide} id="submit" />
            </form>
        </div>
    )

}