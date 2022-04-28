import React from "react";


class Registro extends React.Component{
	render(){
		return(
			<div>
				<form>
					<label>
						Nombre:
						<p><input type="text" name="nombre" /></p>
						Apellido:
						<p><input type="text" name="apellido" /></p>
						Email:
						<p><input type="email" name="email" /></p>
						Clave:
						<p><input type="password" name="contraseña" /></p>
					</label>
				</form>
			</div>
		)
	}
} 
export default Registro