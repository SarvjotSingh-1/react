// import React from 'react'
// import { useState } from 'react'
//   import { useEffect } from 'react'
// const App = () => {
  
//   const [Num, setNum] = useState(0)
//   const [Num2, setNum2] = useState(100)
  
//   useEffect(() => {
//     console.log('useEffect')
//   },[Num])

//   return (
//     <div>App
//       <h1>value of num is {Num}</h1>
//       <h1>value of num2 is {Num2}</h1>
//       <button onClick={()=>{
//         setNum(Num+1)
        
//       }}
//       onDoubleClick={()=>{
//         setNum2(Num2-1)
//       }}
//       >Click</button>
//     </div>
//   )
// }

// export default App


import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  const aChnging = () => {
    console.log('A changed');
    
  }

  const bChnaging = () => {
    console.log('b changed');
    
  }
  useEffect(() => {
   aChnging();
    console.log('use effect is runnig ..');
    
    
  },[a,b])
  return (
    <div>App
      <h1>A is {a}</h1>

      <h1>B is {b}</h1>

      <button onClick={()=>{
        setA(a+1)
        
      }}>Change A</button>
      <button
      onClick={()=>{
        setB(b-1)
      }}
      >Change B</button>
    </div>
  )
}

export default App