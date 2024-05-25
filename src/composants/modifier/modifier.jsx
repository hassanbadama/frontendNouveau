import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

export const Modifier = () => {
  const { id } = useParams()
  const [description, setDescription] = useState([]); 
  console.log("id recuperer");
  useEffect(() => {
    fetch(`https://backend-mongodb-0jt7.onrender.com/auth/rechercher/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("oui c'est lui mm elemets");
        console.log(data);
        setDescription(data)
      });

  }, [true]);
      const [file, setFile] = useState(""); 
  const token = localStorage.getItem("token")

  const Sauces = async (e) => {
    const mot = localStorage.getItem("mot")
    const description = document.querySelector(".description").value;
    const fichier = document.querySelector(".file");

    e.preventDefault();
    let Formdata = new FormData()
    Formdata.append("userId", mot)
    Formdata.append("description", description)
    Formdata.append("image", fichier.files[0])
    console.log(fichier.files[0]);
    console.log(Formdata);
    fetch(`https://backend-mongodb-0jt7.onrender.com/auth/modifier/${id}`, {
      method: 'put',
      headers: {
        "Authorization": `Bearer ${token}`
      },
      body: Formdata
    }).then((res) => res.json())
      .then((data) => {
        window.location.reload();
        console.log(data)
      })
  }
  console.log(id);
  return (
    <form id="form" onSubmit={Sauces} className="form_sauces" action="" >
      <label htmlFor="">Description</label>
      <textarea id="story" className="description" name="description" value={description.description} onChange={(e) => setDescription(e.target.value)} rows="5" cols="33">
      </textarea>
      <label htmlFor="">Image</label>
      <input type="file" className="file" name="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
      <input type="submit" value="Valider" id="submit" />
    </form>
  )
}