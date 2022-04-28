import React from "react";
import Home from "./Home";
import Fruta from "./Fruta"

class Producto extends React.Component{
	constructor(){
		super()
		this.state={
			mensaje:""
		}
	}
	handlerClick=()=>{
		this.setState({
			mensaje:"Gracias por su compra"
		})	
	}
	render(){
		return(
			<div>
				<p>Iphone</p>
				<p>100€</p>
				<button onClick={this.handlerClick}>Comprar</button>
				{this.state.mensaje}
			</div>
		)
	}
} 
export default Producto;