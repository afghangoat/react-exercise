import React, {useState} from 'react';
function ToDoList(){
	const [tasks,setTasks]=useState(["Eat breakfast","Clean room","Walk the plank"]);
	const [newtask,setnewtask]=useState("");
	function handleInputChange(event){
		setnewtask(event.target.value);
	}
	function addTask(){
		if(newtask.trim()!==""){
			setTasks(t=>[...t,newtask]);
			setnewtask("");
		}
	}
	function remTask(index){
		const updatedtasks=tasks.filter((_,i)=>i!==index);
		setTasks(updatedtasks);
	}
	function moveTaskUp(index){
		if(index>0){
			const updatedtasks=[...tasks];
			[updatedtasks[index],updatedtasks[index-1]]=[updatedtasks[index-1],updatedtasks[index]];
			setTasks(updatedtasks);
		}
	}
	function moveTaskDown(index){
		if(index<tasks.length-1){
			const updatedtasks=[...tasks];
			[updatedtasks[index],updatedtasks[index+1]]=[updatedtasks[index+1],updatedtasks[index]];
			setTasks(updatedtasks);
		}
	}
	return(
	<div className="to-do-list">
		<h1 className="thed">To-Do List</h1>
		<div>
			<input type="text" placeholder="Enter task..." value={newtask} onChange={handleInputChange}/>
			<button className="add-button" onClick={addTask}>Add</button>
		</div>
		<ol>
		{tasks.map((task,index)=><li key={index}><span className="text">{task}</span><button className="delete-button" onClick={()=>remTask(index)}>🗑️</button><button className="move-button" onClick={()=>moveTaskUp(index)}>☝️</button><button className="down-button" onClick={()=>moveTaskDown(index)}>👇</button></li>)}
		</ol>
	</div>);
}
export default ToDoList