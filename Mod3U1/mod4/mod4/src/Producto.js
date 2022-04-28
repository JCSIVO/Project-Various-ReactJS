import React,{useState,useEffect} from "react";
import {
	useParams
}from "react-router-dom";

function Producto(props) {
	const params = useParams()
	console.log(params)
	const [loading, setLoading] = useState(true)
	const [producto, setProducto] = useState([
		{
		
			id:1,
			nombre:"Coche",
			precio:120
		},
		{
			id:2,
			nombre:"Moto",
			precio:420
		},
		{
			id:3,
			nombre:"Barco",
			precio:120
		}
	
	])
	useEffect(
		()=>{

		},
		[]
		)
	if(loading){
		return(
			<div>
				Loading ...
			</div>
			)
		}else{
			return(
			<div>
				<p>Iphone</p>
				<p>1100</p>
			</div>
			)

		}
		
		
	
} 
export default Producto;