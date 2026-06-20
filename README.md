# React-notes
react projects : Small Counter App < To-Do App
To-Do App:
explanation:
This app is a basic Todo List application where a user can:

Add a task
See all tasks
Delete a task
Get a message when list is empty

How the App works (step by step)
 State Management
I using useState:
const [task, setTask] = useState("");
const [todos, setTodos] = useState([]);
task → stores current input value
todos → stores all tasks in an array

2.  Input Handling
onChange={(e) => setTask(e.target.value)}
 Every time user types, task updates in real time.

 Adding a Todo
const addTodo = () => {
  if (!task.trim()) return;

  setTodos([...todos, task]);
  setTask("");
};
What happens here:
Checks if input is empty → adding Blank Tasks
Adds new task into todos array
Clears input box after adding
4.  useEffect (Logging)
useEffect(() => {
  console.log("Todos Updated:", todos);
}, [todos]);
What it does:
Runs every time todos changes
Prints updated list in console
Used for debugging / tracking changes
5. Delete Todo
const deleteTodo = (index) => {
  setTodos(todos.filter((_, i) => i !== index));
};
Finds item by index
Removes that item from array
Updates state
6. Rendering UI
{todos.length === 0 ? (
  <p>No tasks available.</p>
) : (
  <ul>
    {todos.map((todo, index) => (
      <TodoItem
        key={index}
        todo={todo}
        onDelete={() => deleteTodo(index)}
      />
    ))}
  </ul>
)}
)
Rendering list with the help of props:

✔ conditional rendering
✔ list rendering
