import React from "react";
import '../conexion/connexion.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";




export const Conexion = ({valide})=>{
    const Na = useNavigate()
    const [mot, setMot] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [nom, setNom] = useState(""); 
    const [prenom, setPrenom] = useState(""); 
    // const [file, setFile] = useState(""); 
    
    const fichier = document.querySelector(".file");

  const Utilisateur = async (e) => { 
    console.log(mot +"=="+email);
     e.preventDefault();
    const data = {
        nom:nom,
        prenom:prenom,
        mot:mot,
        email:email
      }

      let Formdata = new FormData()
      Formdata.append("nom",nom)
      Formdata.append("prenom",prenom)
      Formdata.append("mot",mot)
      Formdata.append("email",email)
      Formdata.append("image",fichier.files[0])

     fetch("https://backend-mongodb-0jt7.onrender.com/api/auth/users", {
        method: 'POST',
        headers: {  "Authorization":"Bearer"},
        body: Formdata
      }).then((res) => res.json()) 
       .then((data) =>{
              console.log(data)
              Na("/")
           })

       setEmail("")
       setMot("")
   }

    return(
        <div className="connexion">
            <h5 className="information">Entrer les informations necessaire pour creer Un compte</h5>
            <form onSubmit={Utilisateur} className="form" action="" enctype="multipart/form-data">
                <label htmlFor="">Nom :</label>
                <input type="text" name="nom" value={nom} onChange={(e) => setNom(e.target.value)} />

                <label htmlFor="">Prenom</label>
                <input type="texte" name="prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} />


                <label htmlFor="">Mot de Passe</label>
                <input type="password" name="mot" value={mot} onChange={(e) => setMot(e.target.value)} />
                <label htmlFor="">Email</label>
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="file" className="file" name="file" accept="image/*"/>
                <input type="submit" value={valide} id="submit" />
            </form>
        </div>
    )

}