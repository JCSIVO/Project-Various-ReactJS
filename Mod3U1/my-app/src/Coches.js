import React from "react"
import ProductoCoche from "./ProductoCoche"

class Coches extends React.Component{
	constructor(){
		super()
		//inicialiar el estado
		this.state={
			titulo:"Concesionario Jose",
			coches:[
				{
					nombre:"Audi",
					Modelo:"A4",
					Año:2022
				},
				{
					nombre:"Bmw",
					Modelo:"X6",
					Año:2018
				},
				{
					nombre:"Seat",
					Modelo:"Leon",
					Año:2020
				}
			]
		}
	}
	handleClick = ()=>{
		//modificar un estado
		this.setState({
			titulo:"Nuevo concesionario de Josse2022",
		})
	}
	// es lo mismo handleClick(){}
	render(){
		return(
			<div>
				<h1>{this.state.titulo}</h1>
				{this.state.coches.map(coche=><ProductoCoche data={coche}/>)}
				<button onClick = {this.handleClick}>Cambiar Titulo</button>
			</div>
		)
	}
}  
export default Coches