import UserGreeting from './userGreeting.jsx'
function Header(){
	return(
	<header>
		<h1>React Test Website <UserGreeting isLoggedIn={true} username="Test user"></UserGreeting></h1>
		<nav>
			<a href="#">Home</a>
			<a href="#">About</a>
			<a href="#">Contact</a>
			<a href="#">Services</a>
		</nav>
		<hr></hr>
	</header>);
}
export default Header