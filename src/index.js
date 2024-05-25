import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Header } from './composants/Header/Header';
import { Connexion } from './pages/Connexion';
import { AjouterUser } from './pages/AjouterUser';
import { AjouterSauces } from './pages/AjouterSauces';
import { AfficheSauces } from './pages/AfficherSauces';
import { AfficherPublication } from './composants/AfficherSauce/AfficherPublication';
import { Page_publication } from './pages/Page_publication';
import { Modifier } from './composants/modifier/modifier';

// import { Conexion } from './composants/conexion/Connexion';
// import { AjouterSauce } from './composants/AjouterSauces/AjouterSauce';
// import { AfficherSauce } from './composants/AfficherSauce/AfficheSauce';

import { Detaille } from './composants/Detaille_sur_sauce/Detaille';
import { likes } from './composants/likes/like';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
    

     
     {/* < Header />
     < Detaille /> */}
     {/* < Connexion />
     < AjouterUser />
     < AjouterSauces/>
     < AfficheSauces /> */}
     
    <Routes>
      
       <Route path="/" element = {< Connexion /> }> </Route>
    
       <Route path="/Creer un compte" element = {< AjouterUser /> }> </Route>
 
       <Route path="/AjouterSauces" element = {< AjouterSauces /> }> </Route>
  
       <Route path="/afficher" element = {< Page_publication /> }> </Route>
       <Route path="/affiche" element = {< Page_publication /> }> </Route>
       <Route path="/modifier/:id" element = {< Modifier /> }> </Route>
       <Route path="/affiches/:id" element = {< Page_publication /> }> </Route>
      
     </Routes>
     
     {/*  <Routes>
      <Route path="/logement/:id" element = {< Logement /> }> </Route>
       <Route path = "/contact" element = {< Contact /> }> </Route>
     </Routes>
     <Routes>
       <Route path = "/apropos" element = {< Apropo /> }> </Route>
     </Routes>
     <Routes>
       <Route path = "/activite" element = {< Activite /> }> </Route>
     </Routes>
     <Routes>
       <Route path = "/programmesemaine" element = {< ProgrammeSemaine/> }> </Route>
     </Routes>
     <Routes>
       <Route path = "/projet" element = {< Projet/> }> </Route>
     </Routes> */}
     </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
