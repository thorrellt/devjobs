import { Routes, Route, useParams } from 'react-router-dom'

const Job = () => {
  const { id } = useParams()

  return <h1>{`Job page for user id ${id}`}</h1>
}

export default Job
