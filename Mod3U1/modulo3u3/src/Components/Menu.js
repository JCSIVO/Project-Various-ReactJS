import React from "react";

import{
	Link
}from "react-router-dom";


function Menu (){
		return(
			<ul>
				<li><Link to="/">Inicio</Link></li>
				<li><Link to="/Categorias">Categorias</Link></li>
				
			</ul>
			)
}

export default Menu;