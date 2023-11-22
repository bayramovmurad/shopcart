import { useContext } from "react"
import { useGlobalContext } from "./context"



const Amount = ({id,amount}) => {
    const { increase ,decrease} = useGlobalContext()
  return (
    <div>
        <button onClick={()=>decrease(id)}>-</button>
        <span>{amount}</span>
          <button onClick={() => increase(id)}>+</button>
    </div>
  )
}
export default Amount