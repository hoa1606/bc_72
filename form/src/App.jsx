import { useState } from 'react'

import ExForm from './component/ExForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <ExForm/>
    </div>
  )
}

export default App
