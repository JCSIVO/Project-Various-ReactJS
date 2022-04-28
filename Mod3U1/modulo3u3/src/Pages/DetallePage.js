import React from "react";
import {useParams} from "react-router-dom"
class DetallePage extends React.Component{
	constructor(props){
		super(props)
		console.log(this.props.match.params.id)
	}
	
	render(){
		return(
			<div>
				<h2>España</h2>
				<p>España es un Pais</p>
			</div>
			)
	}

}

export default DetallePage;