import React, { useState } from "react";
import "./KanbanBoard.css";

interface Task {
  id: number;
  content: string;
  time: string;
}

const KanbanBoard: React.FC = () => {
  const [todo, setTodo] = useState<Task[]>([]);
  const [inProgress, setInProgress] = useState<Task[]>([]);
  const [finished, setFinished] = useState<Task[]>([]);
  const [taskContent, setTaskContent] = useState<string>("");
  const [taskTime, setTaskTime] = useState<string>("");
  const [currTab, setCurrTab] = useState<number>(0);
  const addTask = () => {
    if (taskContent.trim() && taskTime.trim()) {
      setTodo((prev) => [
        ...prev,
        { id: Date.now(), content: taskContent, time: taskTime },
      ]);
      setTaskContent("");
      setTaskTime("");
    }
  };

  const handleDragStart = (e: React.DragEvent, task: Task, column: string) => {
    e.dataTransfer.setData("task", JSON.stringify(task));
    e.dataTransfer.setData("fromColumn", column);
  };

  const handleDrop = (
    e: React.DragEvent,
    setColumn: React.Dispatch<React.SetStateAction<Task[]>>
  ) => {
    const task = JSON.parse(e.dataTransfer.getData("task")) as Task;
    const fromColumn = e.dataTransfer.getData("fromColumn");

    if (fromColumn === "todo")
      setTodo((prev) => prev.filter((t) => t.id !== task.id));
    if (fromColumn === "inProgress")
      setInProgress((prev) => prev.filter((t) => t.id !== task.id));
    if (fromColumn === "finished")
      setFinished((prev) => prev.filter((t) => t.id !== task.id));

    setColumn((prev) => [...prev, task]);
  };

  const allowDrop = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const renderTasks = (tasks: Task[], column: string) =>
    tasks.map((task) => (
      <div 
        key={task.id}
        className="task-manager-task"

        draggable
        
        onDragStart={(e) => handleDragStart(e, task, column)}
      >
        <span>{task.content}</span>
        <span className="task-time">{task.time}</span>
      </div>
    ));

  return (
    <div>
      <div className="input-container" >
        <input
          type="text"
          placeholder="Task name"
          value={taskContent}
          onChange={(e) => setTaskContent(e.target.value)}
          className="github-button"
        />
        <input
          type="time"
          value={taskTime}
          onChange={(e) => setTaskTime(e.target.value)}
          className="github-button"
        />
        <button onClick={addTask} className="github-button">Add Task</button>
      </div>
      <div className="kanban-board">
        <div
          className="column"
          onDrop={(e) => handleDrop(e, setTodo)}
          onDragOver={allowDrop}
        >
          <h3>TODO</h3>
          {renderTasks(todo, "todo")}
        </div>
        <div
          className="column"
          onDrop={(e) => handleDrop(e, setInProgress)}
          onDragOver={allowDrop}
        >
          <h3>In Progress</h3>
          {renderTasks(inProgress, "inProgress")}
        </div>
        <div
          className="column"
          onDrop={(e) => handleDrop(e, setFinished)}
          onDragOver={allowDrop}
        >
          <h3>Finished</h3>
          {renderTasks(finished, "finished")}
        </div>
      </div>
    </div>
  );
};

export default KanbanBoard;
