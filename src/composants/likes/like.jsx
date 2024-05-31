import React from "react";
import '../likes/like.css'
import { Message } from "../message/message";
import { useState } from "react";

export const Likes = ({ id_pub, like, dislike, tabLike, tabDisLike, sms_like, nbr_message}) => {
  const [nom, setNom] = useState(""); 
  const idp = localStorage.getItem("mot")

console.log("messages =====");

console.log(sms_like);
sms_like && sms_like.map(el =>{
  console.log(el.message);

})
fetch(`http://localhost:3000/api/auth/rechercherUser/${idp}`)
.then((res) => res.json())
.then((data) => {
     console.log("trouver user");
     console.log(data.nom);
     setNom(data.nom)

  });


 
  const LAKIER = (liked, idp) => {
    
    const k = {
      mot: idp,
      like: liked
    }
    fetch(`http://localhost:3000/api/auth/likes/${id_pub}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(k)
    }).then((res) => res.json())
      .then((data) => {
        if (data) {
        //  window.location.reload();
          // Nagate("/affiche")  
        }
        console.log(data)
      })
  }
 

  const liker = (e) => {
    document.querySelector(".liked").disabled=true
     console.log("likk");
     console.log(e.target);
    let liked = 1
    if (tabLike.includes(idp)) {
      console.log("existe");
      liked = 0
      console.log(liked);
      LAKIER(liked, idp)
      // e.target.disabled=true
      window.location.reload();
      //Nagate("/afficher")
    }
    else {
      console.log("n'existe");
      liked = 1
      console.log(liked);
      LAKIER(liked, idp)
      // e.target.disabled="true"
     window.location.reload();
   
    }
  }

  const disliker = () => {
    console.log("n'est likerr");
    let liked = -1
    if (tabDisLike.includes(idp)) {
      console.log("existe");
      liked = 0
      console.log(liked);
      LAKIER(liked, idp)
      window.location.reload();
    }
    else {
      console.log("n'existe");
      liked = -1
      console.log(liked);
      LAKIER(liked, idp)
      window.location.reload();
    }

  }
  const message =(e)=>{
    console.log("message");
    console.log(e);
    console.log(e.target);
    console.log("teste =");
    //console.log(monElement.children[i].tagName);node.parentNode;
    let t1 = e.target
    let t2 = e.target.parentElement.children[4]
    console.log(t1);
    console.log(t2);
   t2.style.display = "block";
   // console.log(document.querySelector('.ferme'));
   
   // document.querySelector('.ferme').style.display = "block";
  }
  //const description = document.querySelector(".description").value;


  
  return (
    <div className="likes">{
      tabDisLike.includes(idp)? <div className="likedflex">
        <button  disabled className="liked" to={`/affiches/${id_pub}`}  onClick={liker} ><i className="like desactive fa-sharp fa-solid fa-thumbs-up"></i> <span className="nbreLike">{like}</span> </button>
        <button  className="disliked pointer" to={`/affiches/${id_pub}`} onClick={disliker} > <i className="dislike fa-sharp fa-solid fa-thumbs-up"></i> <span className="nbreLike">{dislike}</span> </button>

          <i onClick={message} className=" like-message fa-solid fa-message"></i> 
          <span  className="nbreLike">{nbr_message}</span> 
         
            <div  className="ferme">
            {
                sms_like && sms_like.map(m=>{
                  return <div className="commentaire"> <p className="nom_commentaire"> {m.nom} </p> <p className="commentaire1">  {m.message}  </p></div>
                })
              }
              < Message
                 id={id_pub}
                 nom={nom}
              />
            
            </div>
       
     </div> :
       tabLike.includes(idp)? <div>
       <button  className="liked pointer" to={`/affiches/${id_pub}`}  onClick={liker} >   <i className=" like fa-sharp fa-solid fa-thumbs-up"></i> <span className="nbreLike">{like}</span> </button>
        
        <button disabled className="disliked desactive" to={`/affiches/${id_pub}`} onClick={disliker} > <i className="dislike desactive fa-sharp fa-solid fa-thumbs-up"></i> <span className="nbreLike">{dislike}</span> </button>
        <i onClick={message} className=" like-message fa-solid fa-message"></i> 
          <span  className="nbreLike">{nbr_message}</span> 
         
            <div  className="ferme">
           
              {
                sms_like && sms_like.map(m=>{
                  return <div className="commentaire"> <p className="nom_commentaire"> {m.nom} </p> <p className="commentaire1">  {m.message}  </p></div>
                })
              }
             
            < Message
                id={id_pub}
                nom={nom}
              />
            </div>
     </div>:<div>
       <button  className="liked pointer" to={`/affiches/${id_pub}`}  onClick={liker} >   <i className="like fa-sharp fa-solid fa-thumbs-up"></i> <span className="nbreLike">{like}</span> </button>
        <button className="disliked pointer" to={`/affiches/${id_pub}`} onClick={disliker} > <i className="dislike fa-sharp fa-solid fa-thumbs-up"></i> <span className="nbreLike">{dislike}</span> </button>
        <i onClick={message} className=" like-message fa-solid fa-message"></i> 
          <span  className="nbreLike">{nbr_message}</span> 
          
            <div  className="ferme">
          
            {
                sms_like && sms_like.map(m=>{
                  return <div className="commentaire"> <p className="nom_commentaire"> {m.nom} </p> <p className="commentaire1">  {m.message}  </p></div>
                })
              }
            < Message
               id={id_pub}
               nom={nom}
              />
            </div>
     </div>
      }
    
      
      {/* <div Link to={`/affiches/${id_pub}`} className="likes">
        <Link to={`/affiches/${id_pub}`} className="liked" onClick={liker} > <i className=" fa-sharp fa-solid fa-thumbs-up"></i> <span className="nbreLike">{like}</span>  </Link>
        <Link to={`/affiches/${id_pub}`} className=""  onClick={disliker} > <i className="dislike fa-sharp fa-solid fa-thumbs-up"></i> <span className="nbreLike">{dislike}</span>  </Link>
      </div> */}
    </div>
  )
}