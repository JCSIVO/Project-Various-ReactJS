import React from "react";
import Home from "./Home";
import Fruta from "./Fruta"

class HomeC extends React.Component{
	constructor(){
		super()
		//inicialiar el estado
		this.state={
			titulo:"Listado de Frutas",
			frutas:[
				{
					nombre:"Sandia",
					calorias:"120"
				},
				{
					nombre:"melon",
					calorias:"100"
				}
			]
		}
	}
	handleClick = ()=>{
		//modificar un estado
		this.setState({
			titulo:"Listado de frutas actualizadas",
		})
	}
	// es lo mismo handleClick(){}
	render(){
		return(
			<div>
				hola mundo Home Casita<h1>{this.state.titulo}</h1>
				<Fruta nombre="Manzana" calorias="65" />
				<Fruta nombre="Naranja" calorias="80" />
				<button onClick = {this.handleClick}>Cambiar Titulo</button>
			</div>
		)
	}
} 
export default HomeC;