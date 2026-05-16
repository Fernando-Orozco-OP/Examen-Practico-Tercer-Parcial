import { useState } from 'react'

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!title.trim()) return

    addTask(title)
    setTitle('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nueva tarea..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button type="submit">Agregar</button>
    </form>
  )
}

export default TaskForm