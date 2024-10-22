import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HienThiSV from './component/HienThiSV'
import ThongTinSV from './component/ThongTinSV'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <HienThiSV />
      <ThongTinSV/>
    </div>
  )
}

export default App
