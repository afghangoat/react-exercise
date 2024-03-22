import React, {useState} from 'react';
function BaseComponent(){
	let [name,setName]=useState("Guest");
	const updatename = ()=>{
		setName("Spongebob");
	}
	return(
	<div>
		<p>Name: {name}</p>
		<button onClick={updatename}>Set name</button>
	</div>);
}
export default BaseComponent