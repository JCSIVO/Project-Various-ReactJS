import React from "react";
import Noticia from "../Components/Noticia";
import Banner from "../Components/Banner";

class PortadaPage extends React.Component{
	constructor(){
		super()
		this.state={
			loading:true,
			noticias:[],
			Banner:{},
			BannerSecundario:{},
			Leidas:0

		}
	}
	componentDidMount(){
		//consultamos las noticias a una entidad "Base de datos"
		setTimeout(()=>{
		this.setState({
			loading:false,
			noticias:[
			{
				id:1,
				titulo:"Madrid",
				noticia:"Madrid capital de España"
			},
			{
				id:2,
				titulo:"España",
				noticia:"España es un Pais"

			},
			{
				id:3,
				titulo:"Sevilla",
				noticia:"Sevilla tiene un color diferente"
			}
			],
			Banner:{
				id:10,
				titulo:"Banners",
				img:"https://tenor.com/es/ver/banner-gif-22206312"
			},
			BannerSecundario:{
				id:11,
				titulo:"Banners",
				img:"https://tenor.com/es/ver/banner-gif-22206312"

			}
		})
	 },1000)
	}
	incrementarLeidas=()=>{
		this.setState({
			leidas:this.state.leidas+1
		})
	}
	render(){
		if(this.state.loading){
			return(
			<div>
				Loading ...
			</div>
			)
		}else{
			return(
			<div>
				<p>Cantidad Noticias Leidas: {this.state.Leidas}</p>
				<Banner img={this.state.Banner.img} />
				{this.state.noticias.map((noticia)=><Noticia data={noticia} />)}
				<Banner img={this.state.BannerSecundario.img} />
			</div>
			)

		}
		
	}

}

export default PortadaPage;