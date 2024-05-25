import React from "react";
import { Conexion } from "../composants/conexion/user";
import { Header } from "../composants/Header/Header";


export const AjouterUser = ()=>{
    return(
        <div>
             < Header
              Connexion = "Revenir a la connexion"
              Ajouter = ""
             />
          < Conexion 
           valide = "CREER"
          />
        </div>
    )
}