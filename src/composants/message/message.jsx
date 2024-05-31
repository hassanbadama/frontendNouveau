import React from "react";
import { useState } from "react";


export const Message = ({id, nom}) => {

    const [description, setDescription] = useState(""); 
    
    const id_mot = localStorage.getItem("mot")
   // const valider = document.querySelector("#form");
   // const Nagate = useNavigate()
     const token = localStorage.getItem("token")

  const Envoyer_message = async (e) => { 
   
     e.preventDefault();
    const message = {
        id_message:id_mot,
        message: description,
        nom:nom
      }
      fetch(`http://localhost:3000/api/auth/like/${id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(message)
      }).then((res) => res.json())
        .then((data) => {
          if (data) {
            window.location.reload();
            // Nagate("/affiche")  
          }
          console.log(data)
        })
   
   }


    return(
        <div>
            <form onSubmit={Envoyer_message} action="">
                <input type="text" name="messae" value={description} onChange={(e) => setDescription(e.target.value)} className="description" id=""/>
                <button className="buton_commentaire" type="submit"> Commenter </button>
            </form>
        </div>
    )
}