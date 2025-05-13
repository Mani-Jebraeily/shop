import React from 'react'
import { useParams } from 'react-router-dom'

function DetailsPage() {
  const {id}=useParams()
  return (
    <div>DetailsPage</div>
  )
}

export default DetailsPage