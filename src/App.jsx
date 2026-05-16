import { useEffect, useState } from 'react'
import api from './services/api'

import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import FilterButtons from './components/FilterButtons'

const App = () => {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    fetchTasks()
  }, [])

  const fetchTasks = async () => {
    try {
      const response = await api.get('/todos?_limit=10')
      setTasks(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false
    }

    setTasks([newTask, ...tasks])
  }

  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    )

    setTasks(updatedTasks)
  }

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id)
    setTasks(filteredTasks)
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed
    if (filter === 'pending') return !task.completed
    return true
  })

  return (
    <div className="container">
      <div className="card">
        <Header />

        <TaskForm addTask={addTask} />

        <FilterButtons
          filter={filter}
          setFilter={setFilter}
        />

        {loading ? (
          <p className="loading">Cargando tareas...</p>
        ) : (
          <TaskList
            tasks={filteredTasks}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        )}
      </div>
    </div>
  )
}

export default App