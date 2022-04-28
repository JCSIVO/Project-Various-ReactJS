import{
	Link
}from "react-router-dom"

function Menu(){
	return(
		<div>
			<ul>
				<li><Link to="/">Inicio</Link></li>
				<li><Link to="alta">Alta</Link></li>
				<li><Link to="ingresar">Ingresar</Link></li>
			</ul>
		</div>
		)
}
export default Menu