import Header from './header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import List from './List.jsx'
import Button from './Buttons.jsx'
import ToDoList from './ToDoList.jsx'
import BaseComponent from './BaseComponent.jsx'
function App() {
	return (
	<>
		<Header></Header>
		<div className="cardholder">
			<Card name="Afghan_Goat" desc="I make games and websites." rep={999}></Card>
			<Card name="Afghan_Goat" rep={999}></Card>
			<Card desc="I make games and websites." rep={999}></Card>
			<Card name="Afghan_Goat" desc="I make games and websites."></Card>
			<Card name="Afghan_Goat" desc="I make games and websites." rep={999}></Card>
		</div>
		<ToDoList></ToDoList>
		<Footer></Footer>
	</>);
}
export default App
