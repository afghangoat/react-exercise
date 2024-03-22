function UserGreeting(props){
	if(props.isLoggedIn){
		return(<h3>Welcome {props.username}!</h3>);
	} else {
		return(<h3>Please log in to continue!</h3>);
	}
}
export default UserGreeting