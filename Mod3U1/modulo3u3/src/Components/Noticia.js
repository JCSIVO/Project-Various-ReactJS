import React from "react";

import{
	Link
}from "react-router-dom";


function Noticia (props){
	
	console.log(props)
		return(
			<>
				<h2><Link to={"/detalle/"+ props.data.id}>{props.data.titulo}</Link></h2>
				<p>{props.data.noticia}</p>

			</>
			)
}

export default Noticia;