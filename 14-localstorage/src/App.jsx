import React from 'react'

const App = () => {
  // localStorage.setItem("name", "sarvjot")
  // const user = localStorage.getItem("name")

  // console.log(user);

  const user = {
    name: "sarvjot",
    age: 21,
    gender: "male",
    city:"yamuna nagar"
  }
  localStorage.setItem("user", JSON.stringify(user))

  const user2 = JSON.parse(localStorage.getItem("user"))

  console.log(user2);


  return (
    <div className='bg-black' >App</div>
  )
}

export default App