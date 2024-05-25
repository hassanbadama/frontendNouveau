// import { useState, useEffect } from 'react'
// import '../AfficherSauce/AfficherSauce.css';
// import card from "../../images/banner.png";
// import { Link } from "react-router-dom";
// import { AjouterSauce } from "../AjouterSauces/AjouterSauce";
// import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";



// export const AfficherSauce = () => {
//     const {id} = useParams()
//     const mot = localStorage.getItem("mot")
//     const [elements, setElements] = useState("");
//     const [user, setUser] = useState("");
//     const Nagate = useNavigate()
//     //const [id, setId] = useState("");
//     console.log("tetsete id");
//    console.log(id);
//     const publication = () => {
//         document.querySelector(".fermer").style.display = "block";
//     }
 
//     //afficher les elements
//     useEffect(() => {
//         fetch("http://localhost:3000/api/auth/afficher")
//             .then((res) => res.json())
//             .then((data) => {
//                 console.log("elemets");
//                 console.log(data);
//                 setElements(data)
//             });

//     }, [true]);

   
//   //liker
//   const like = (e)=>{
//     const k={
//         mot:mot,
//         like:1
//     }
//        fetch(`http://localhost:3000/api/auth/likes/${id}`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json'},
//         body: JSON.stringify(k)
//       }).then((res) => res.json()) 
//        .then((data) => {
//         if (data) {
//             window.location.reload();
//             // Nagate("/affiche")  
//         }
//           console.log(data) 
//         })
       
//   }

//   const dislike = ()=>{
//     console.log("n'est likerr");

//     const k={
//         mot:mot,
//         like:-1
//     }
//        console.log("likerr");
//        fetch(`http://localhost:3000/api/auth/likes/${id}`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json'},
//         body: JSON.stringify(k)
//       }).then((res) => res.json()) 
//         .then((data) => { 
//             if (data) {
//                 window.location.reload();
//                 // Nagate("/affiche")  
//             }
//             console.log(data) 
//         })
 
// }

//     return (
//         <div>
//             <div className="enteteAfficher">
//                 <img className="image_profile" src={card} alt="" />
//                 <h1 className="publication">publication</h1>
//             </div>
//             <div className="flex">
//                 <div className="profile">
//                     <div className="profileNom">
//                         <img className="image_profile" src={card} alt="" />
//                         <h3 className="nom"> <span>Hassane</span> <span>Badama</span>  </h3>
//                     </div>
//                     <div>
//                         <ul className="menu">
//                             <li className="menuli"> <Link to="/">Deconnecter</Link> </li>
//                             <li onClick={publication} className="menuli"> <Link to="">Ajouter une publication </Link></li>
//                         </ul>
//                         <div className="form_sauces">
//                             < AjouterSauce />
//                         </div>
//                     </div>
//                 </div>

//                 <div className="card_flex">
//                     {
//                         elements?elements.map(data => {
//                             return (
//                                 <div key={data._id} className="card">
//                                     <Link to={`/affiches/${data._id}`}>
//                                     <div className="profileNom">
//                                         <img className="image_publier" src={card} alt="" />
//                                         <h3 className="nom_publier"> <span>{data.nom}</span> <span>Badama</span>  </h3>
//                                     </div>
//                                     <p className="texte">{data.description}</p>
//                                     <img className="img" src={data.file} alt="" />
//                                     <div className="likes">
//                                         <Link to={`/affiches/${data._id}`} onClick={like} className="like" > <i class="fa-sharp fa-solid fa-thumbs-up"></i> <span className="nbreLike">{data.likes}</span>  </Link>
//                                         <Link to={`/affiches/${data._id}`}  onClick={dislike} className="dislike" > <i class="fa-sharp fa-solid fa-thumbs-up"></i> <span className="nbreLike">{data.dislikes}</span>  </Link>
//                                     </div>
//                                     </Link>
//                                 </div>
//                             )
//                         }):""
//                     }
//                 </div>
//             </div>
//         </div>
//     )
// }