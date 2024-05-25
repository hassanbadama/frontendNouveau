import React from "react";
import { useState } from "react";
import { AfficherSauce } from "../AfficherSauce/AfficheSauce";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import '../profile/profile.css'
import card from "../../images/banner.png";



export const Profile = ( {nom, prenom,image})=>{
    const [nom_publication, setNom_publication] = useState(nom); 
    const [image_publication, setImage_publication] = useState(image); 
    const [prenom_publication, setPrenom_publication] = useState(prenom); 


    const [description, setDescription] = useState(""); 
    const [file, setFile] = useState(""); 
    const [erlance, setRelance] = useState(""); 
    const valider = document.querySelector("#form");
   // const Nagate = useNavigate()
     const token = localStorage.getItem("token")

  const Sauces = async (e) => { 
    const mot = localStorage.getItem("mot")
    const description = document.querySelector(".description").value;
    const fichier = document.querySelector(".file");


    console.log("teste les images");
    console.log(fichier);
    console.log(image_publication);

    setFile(file.name)
    console.log("testeee=file");
    console.log(file);
     e.preventDefault();

    let Formdata = new FormData()
    Formdata.append("userId",mot)
    Formdata.append("description",description)
    Formdata.append("image",fichier.files[0])

    Formdata.append("nom",nom_publication)
    Formdata.append("prenom",prenom_publication)
    Formdata.append("image_publication",image_publication)

  
  
    
    console.log(fichier.files[0]);
      console.log(Formdata);
     fetch("https://backend-mongodb-0jt7.onrender.com/auth/sauces", {
        method: 'POST',
        headers: {
          "Authorization":`Bearer ${token}`
        },
        body:Formdata
      }).then((res) => res.json()) 
       .then((data) =>{
        // window.location.reload();
        console.log(data)
       })
   
   }
    const publication = () => {
        document.querySelector(".hipope").style.display = "block";
    }
    const ferme_formulaire = ()=>{
        document.querySelector(".hipope").style.display = "none";
    }
    return (
        <div>
             
            <div className="profile">
                <div className="profileNom">
                <Link className="image_profile" to=""> <img className="images_profile" src={image} alt="" />  </Link>
                    <h3 className="nom"> <span>{nom}</span> <span> {prenom} </span>  </h3>
                </div>
                <nav>
                    <ul className="headmenu">
                        <li onClick={publication} className="menuli"> <Link to="/AjouterSauces">Publier</Link> </li>
                        <Link to="/"> <li className="menuli"> Deconnecter </li></Link>
                    </ul>
                </nav>
            </div>

            <div className="hipope" >
                <div className="hipop">
                    <form id="form" onSubmit={Sauces} className="form_sauces" action="" >
                        <label htmlFor="">Description</label>
                        <textarea id="story" className="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} rows="5" cols="33">
                        </textarea>
                        <label htmlFor="">Image</label>
                        <input type="file" className="file" name="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
                        <div className="annuller">
                            <input type="submit" value="Valider" id="submit" />
                            <Link className="annulle" onClick={ferme_formulaire}> Annuller</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}
