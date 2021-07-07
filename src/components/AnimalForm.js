import React, { useState } from 'react'

const AnimalForm = (props) => {
  const [animal, setAnimal] = useState({
    species: ''
  })

  const handleChange = event => {
    console.log(`${event.target.name} : ${event.target.value}`);

    setAnimal({
      ...animal,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log(animal)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="species" placeholder="Species" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default AnimalForm
