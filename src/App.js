import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors' Appointment",
      day: "February 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "February 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Grocery shopping",
      day: "February 5th at 4:30pm",
      reminder: false,
    },
  ]);

  // Delete task

  const deleteTask = (id) => {
    console.log("delete", id);
  };

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
