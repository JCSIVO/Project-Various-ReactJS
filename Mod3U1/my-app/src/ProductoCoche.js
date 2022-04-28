import React from "react"

class ProductoCoche extends React.Component{
	constructor(props){
		super(props)
		this.state={
			mensaje:""
		}
	}
	handlerClick=()=>{
		this.setState({
			mensaje:`Felicidades ha comprado un ${this.props.data.nombre}, ${this.props.data.Modelo}, del ${this.props.data.Año}`
		})	
	}
	render(){
		return(
			<div>
				<p>Nombre: {this.props.data.nombre}</p>
				<p>Modelo: {this.props.data.Modelo}</p>
				<p>Año: {this.props.data.Año}</p>
				<button onClick={this.handlerClick}>Comprar</button>
				{this.state.mensaje}
			</div>
			)
	}
}
export default ProductoCoche;