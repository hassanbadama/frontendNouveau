import React from "react";
import { Conexion } from "../composants/conexion/Connexion";
import { Header } from "../composants/Header/Header";


export const Connexion = ()=>{
    return(
        <div>
             < Header
              Connexion = ""
              Ajouter = "Creer un compte"
             />
          < Conexion 
           valide = "CONNECTER"
          />
        </div>
    )
}