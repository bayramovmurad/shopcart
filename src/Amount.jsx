import { useGlobalContext } from "./context"



const Amount = ({amount,id}) => {
    const { Increment, Decrement } = useGlobalContext();
  return (
      <div>


          <button onClick={() => Decrement(id)} className="border border-black">
              -
          </button>
          <span>{amount}</span>
          <button onClick={() => Increment(id)} className="border border-black">
              +
          </button>
      </div>
  )
}
export default Amount