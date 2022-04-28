import React from "react";
import contadorCantidad from "./contadorCantidad";

class ContadorPersonas extends React.Component{
	constructor(){
		super()
		this.state={
			mensaje:"",
			Personas:0
		}
	}
	handlerClickSuma=()=>{
		this.setState({
			mensaje:"Sumamos",
			Personas:this.state.Personas+1
		})	
	}
	handlerClickResta=()=>{
		this.setState({
			mensaje2:"Restamos",
			Personas:this.state.Personas-1
		})	
	}
	render(){
		return(
			<div>
				<p>Personas:{this.state.Personas}</p>
				<button onClick={this.handlerClickSuma}>Sumar</button>
				<button onClick={this.handlerClickResta}>Restar</button>
				<contadorCantidad Personas={this.state.cantidad} mensaje={this.state.mensaje}/>
				
			
				
			</div>
		)
	}
}
export default ContadorPersonas;