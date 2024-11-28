import Item from "./TodoItem";
const TodoItemNew = ({ItemListArray}) => {
   return(
<div className="items-container">
   {ItemListArray.map((item) =>( <Item itemName={item.name} itemDate={item.dueDate} ></Item>
))}
   
</div>
   );
  }
  export default TodoItemNew;



  {/* <Item itemName="Coding" itemDate="5/10/22" ></Item>
  <br />
  <Item itemName="Journaling" itemDate="6/10/22" ></Item> */}