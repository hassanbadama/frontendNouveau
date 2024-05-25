import React from "react";
import '../AjouterSauces/AjouteSauce.css';
import { useState } from "react";
import { AfficherSauce } from "../AfficherSauce/AfficheSauce";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";


export const AjouterSauce = ()=>{
   
    const [description, setDescription] = useState(""); 
    const [file, setFile] = useState(""); 
    const [erlance, setRelance] = useState(""); 
    const valider = document.querySelector("#form");
   // const Nagate = useNavigate()
   const token = localStorage.getItem("token")
   let teste = false
  const Sauces = async (e) => { 
    teste = true
    const mot = localStorage.getItem("mot")
    const description = document.querySelector(".description").value;
    const fichier = document.querySelector(".file");


    
    setFile(file.name)
    console.log("testeee=file");
    console.log(file);
     e.preventDefault();

    // let data = {
    //     nom:nom,
    //     description:description,
    //     file:file
    //   }
    let Formdata = new FormData()
    Formdata.append("userId",mot)
    Formdata.append("description",description)
    Formdata.append("image",fichier.files[0])
  
      // if (file.length>0) {
      //   data = new FormData();
      //   data.append("images",file[0]);
      //   data.append("nom",nom);
      //   data.append("description",description);
      // }
    //   const donnee = new FormData(valider);
    
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
        console.log(data)
        teste = data
       })
   
   }
   console.log("true ou fals");
   console.log(!teste);
  //  if (teste) {
  //   console.log("tetse = = = ");
  //   return < Navigate to="afficherttt"/> 
  // }
    return( 
      <> 
        <div>
          {/* //enctype="multipart/form-data */}
          <form id="form" onSubmit={Sauces}  className="form_sauces fermer" action="" >
              <label htmlFor="">Description</label>
              <textarea id="story"  className="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} rows="5" cols="33">
               </textarea>
               <label htmlFor="">Image</label>
               <input type="file" className="file" name="file" accept="image/*"  onChange={(e) => setFile(e.target.files[0])}  />
               <input type="submit" value="Valider" id="submit" />
          </form>

            {/* <form id="form" onSubmit={Sauces}  className="form_sauces" action="" enctype="multipart/form-data">
                <label htmlFor="">Nom</label>
                <input type="text" className="nom" name="nom" value={nom} onChange={(e) => setNom(e.target.value)} />
                <label htmlFor="">Description</label>
                <input type="text" className="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                <label htmlFor="">Image</label>
                <input type="file" className="file" name="file" accept="image/*"  onChange={(e) => setFile(e.target.files[0])}  />
                <input type="submit" value="Valider" id="submit" />
            </form> */}
        </div>
         {/* < AfficherSauce /> */}
      </>
    )
}