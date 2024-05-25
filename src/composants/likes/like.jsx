import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import '../likes/like.css'
import { useNavigate } from "react-router-dom";
import { Page_publication } from "../../pages/Page_publication";


export const Likes = ({ id_pub, like, dislike, tabLike, tabDisLike }) => {
   const t ="disabled"
  const idp = localStorage.getItem("mot")
  const { id } = useParams()
  const Nagate = useNavigate()
  const [el, setEL] = useState(0);
 


  const LAKIER = (liked, idp) => {
    
    const k = {
      mot: idp,
      like: liked
    }
    fetch(`https://backend-mongodb-0jt7.onrender.com/auth/likes/${id_pub}`, {
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
console.log("etat de el");
console.log(el);
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
  return (
    <div className="likes">{
      tabDisLike.includes(idp)? <div className="likedflex">
        <button  disabled className="liked" to={`/affiches/${id_pub}`}  onClick={liker} ><i className="like desactive fa-sharp fa-solid fa-thumbs-up"></i> <span className="nbreLike">{like}</span> </button>
        <button  className="disliked pointer" to={`/affiches/${id_pub}`} onClick={disliker} > <i className="dislike fa-sharp fa-solid fa-thumbs-up"></i> <span className="nbreLike">{dislike}</span> </button>
     </div> :
       tabLike.includes(idp)? <div>
       <button  className="liked pointer" to={`/affiches/${id_pub}`}  onClick={liker} >   <i className=" like fa-sharp fa-solid fa-thumbs-up"></i> <span className="nbreLike">{like}</span> </button>
        <button disabled className="disliked desactive" to={`/affiches/${id_pub}`} onClick={disliker} > <i className="dislike desactive fa-sharp fa-solid fa-thumbs-up"></i> <span className="nbreLike">{dislike}</span> </button>
     </div>:<div>
       <button  className="liked pointer" to={`/affiches/${id_pub}`}  onClick={liker} >   <i className="like fa-sharp fa-solid fa-thumbs-up"></i> <span className="nbreLike">{like}</span> </button>
        <button className="disliked pointer" to={`/affiches/${id_pub}`} onClick={disliker} > <i className="dislike fa-sharp fa-solid fa-thumbs-up"></i> <span className="nbreLike">{dislike}</span> </button>
     </div>
      }
    
      
      {/* <div Link to={`/affiches/${id_pub}`} className="likes">
        <Link to={`/affiches/${id_pub}`} className="liked" onClick={liker} > <i className=" fa-sharp fa-solid fa-thumbs-up"></i> <span className="nbreLike">{like}</span>  </Link>
        <Link to={`/affiches/${id_pub}`} className=""  onClick={disliker} > <i className="dislike fa-sharp fa-solid fa-thumbs-up"></i> <span className="nbreLike">{dislike}</span>  </Link>
      </div> */}
    </div>
  )
}