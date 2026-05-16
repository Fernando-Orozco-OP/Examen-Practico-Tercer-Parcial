import { FaTrash } from 'react-icons/fa'

const TaskItem = ({ task, toggleTask, deleteTask }) => {
  return (
    <div className="task-item">
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />

        <span className={task.completed ? 'completed' : ''}>
          {task.title}
        </span>
      </div>

      <button
        className="delete-btn"
        onClick={() => deleteTask(task.id)}
      >
        <FaTrash />
      </button>
    </div>
  )
}

export default TaskItem