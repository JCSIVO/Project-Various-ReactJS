import React from "react";

import{
	Link
}from "react-router-dom";


function Banner (props){
	console.log(props)
		return(
			<>
				<img src={props.img}></img>

			</>
			)
}

export default Banner;