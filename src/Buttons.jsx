function Button(){
	const handleClick= (name,e) => e.target.textContent="Ouch! "+name;
	return(<button onClick={(e)=>handleClick("Afghan Goat",e)}>Click me!</button>);
}
export default Button