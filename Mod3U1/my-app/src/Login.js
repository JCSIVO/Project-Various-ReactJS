import React from "react";


class Login extends React.Component{
	render(){
		return(
			<div>
				<form>
					<label>
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
export default Login