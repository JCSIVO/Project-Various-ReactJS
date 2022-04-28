import React from "react"

class Fruta extends React.Component{
	render(){
		console.log(this.props)
		return(
			<div>
				<p>Tipo de Fruta:{this.props.nombre}</p>
				<p>Calorias: {this.props.calorias}</p>
			</div>
			)
	}
}
export default Fruta;