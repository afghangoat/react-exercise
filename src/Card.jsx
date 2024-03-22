import p_image from './assets/botka_sphere.png';
import React, {useState} from 'react';
function Card(props){
	let [reputation,setRep] = useState(props.rep);
	const like = ()=>{
		setRep(reputation+1);
	}
	const dislike = ()=>{
		setRep(Math.max(0,reputation-1));
	}
	return(
	<div className="card">
		<img className="card-image" alt="Profile picture" src={p_image}></img>
		<h2 className="card-title">{props.name}</h2>
		<p className="card-text">Reputation: {reputation}<br/>{props.desc}</p>
		<button className="bt1" onClick={like}>👍</button><button className="bt1" onClick={dislike}>👎</button>
	</div>);
}
Card.defaultProps={
	name:"Guest",
	rep: 0,
	desc: "lorem ipsum"
}
export default Card