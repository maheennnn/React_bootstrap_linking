import "./App.css";
import Headingtodo from "./components/Heading";
import ClockTime from "./components/ClockT";
import TodoItemNew from "./components/TodoItemNew";

function App() {
const ItemListArray=[
{
  name : 'Play cricket',
  dueDate : '4/10/22',
},
{
  name : 'Play football',
  dueDate : '4/10/22',
}
]

  return (
    <div className="container">
      <center className="todo-container">
        <Headingtodo></Headingtodo>
        <br />
        <div className="container main">
          <div className="row ms-0">
            <div className="col-6">
              <input type="text" placeholder="Enter your to-dos here" />
            </div>
            <div className="col-4">
              <input type="date" name="" id="" />
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-success">
                Add
              </button>
            </div>
          </div>
          <TodoItemNew ItemListArray={ItemListArray}></TodoItemNew>
        </div>
      </center>

      <div className="clock-container">
        <ClockTime></ClockTime>
      </div>
    </div>
  );
}

export default App;
