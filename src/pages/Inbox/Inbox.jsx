import { useState, useEffect } from "react";
import { getTasks } from "../../services/taskService.js";

export default function Inbox() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getTasks();
        console.log(data);
        setTasks(data);
      } catch (error) {
        console.log(error);
        setError("could not load tasks");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <p>Loading tasks....</p>;

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>inbox</h1>
      {tasks.length === 0 && <p>No tasks found</p>}
      <ol>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              {task.title} - {task.description}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
