const FilterButtons = ({ filter, setFilter }) => {
  return (
    <div className="filters">
      <button onClick={() => setFilter('all')}>
        Todas
      </button>

      <button onClick={() => setFilter('completed')}>
        Completadas
      </button>

      <button onClick={() => setFilter('pending')}>
        Pendientes
      </button>
    </div>
  )
}

export default FilterButtons