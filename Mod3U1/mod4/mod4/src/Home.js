import React, {useState} from "react";
import Producto from "./Producto";

function Home(){
	const [titulo, setTitulo] = useState("Listado de Productos")
	/*
	const aux = useState("listado de productos")
	aux[0]->estado
	aux[1]-> funcion para modificar el estado 
	*/

	const  [producto, setProducto] = useState ([
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
	const handleClick = () =>{
		setTitulo("Listado de productos actualizados")
	}
	const handleClickFiltrarProductos = () =>{
		const aux = producto.filter(element=>element.id>1)
		console.log(aux)
		setProducto(aux)
		/*setProducto([
			{
			id:1,
			nombre:"Coche",
			precio:120
		}

			])*/
	}
		return(
			<div>
				<h1>{titulo}</h1>
				<button onClick = {handleClick}>Cambiar Titulo</button>
				<button onClick = {()=>setTitulo("Listado de productos actualizados")}>Cambiar Titulo2</button>
				{producto.map(producto=><Producto data={producto} />)}
				<button onClick = {handleClickFiltrarProductos}>Filtrar</button>
			</div>
		)
	
} 
export default Home;