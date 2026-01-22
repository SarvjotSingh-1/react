import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
        <Card user='Aman Singh' age={18} img={"https://images.unsplash.com/photo-1767642833959-0cac90824996?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
        <Card user='Sarthak' age={21} img = {"https://plus.unsplash.com/premium_photo-1723428295291-d2abb18bc76c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
        <Card user='Aditya' age={21} img = {"https://images.unsplash.com/photo-1734784547175-e02d14fff45c?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
    </div>
  )
}

export default App