import "../models/task.js";

const URL = "http://localhost:5233/tasks";
/**
 * @param {Task} task
 * @returns {Promise<Task>}
 */
export async function postTask(task) {
  try {
    const response = await fetch(`${URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });

    if (!response.ok) {
      throw new Error("Failed to add task");
    }

    return await response.json();
  } catch (error) {
    console.log("addTask error:", error);
    throw error;
  }
}

/**
 * @returns {Promise<Task[]>}
 */
export async function getTasks() {
  try {
    const response = await fetch(`${URL}`);

    if (!response.ok) {
      throw new Error("Failed to fetch tasks");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("getTasks error", error);
    throw error;
  }
}
