import React from "react";

class contadorCantidad extends React.Component{
	constructor(props){
		super(props)
		console.log(this.props)
	}
	render(){
		return(
			<div>
				<p>Personas:{this.props.Personas}</p>
				<p>mensaje: {this.props.mensaje}</p>		
				
			</div>
		)
	}
}
export default contadorCantidad;