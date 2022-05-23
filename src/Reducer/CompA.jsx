import React,{ useContext} from 'react'
import { CountContext } from './../App'

function CompA() {
    const countContext=useContext(CountContext)
  return (
    <div className='CompoA'>
        ComponentA
        <button onClick={ () => countContext.countDispatch("increment")}>
            increment</button>
        <button onClick={ () => countContext.countDispatch("decrement")}>
            decrement</button>
        <button onClick={ () => countContext.countDispatch("reset")}>
            reset</button>
    </div>
  )
}
export default CompA