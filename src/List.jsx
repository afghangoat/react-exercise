function List(){
	const fruits=["orange","banana","apple","pear"];
	const list1=fruits.map((fruit)=><li>{fruit}</li>);
	return(<ol>{list1}</ol>);
}
export default List