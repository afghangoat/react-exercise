function Food(){
	const food1="Kolbász";
	const food2="Lóhús";
	return(
	<ul>
		<li>Apple</li>
		<li>{food1}</li>
		<li>{food2.toUpperCase()}</li>
	</ul>);
}
export default Food