import Amount from "./Amount";
import { useGlobalContext } from "./context"



const App = () => {
const {cart} = useGlobalContext();
console.log(cart);

  return (
    <div>
        {
            cart.map(({id,img,title,price,amount})=>{
                return(
                    <div className="flex justify-between border border-black w-4/12 mx-auto p-4" key={id}>
                        <div>
                            <img width={100} src={img} alt={title} />
                            <h3>{title}</h3>
                            <p>{(price * amount).toFixed(2)}</p>
                        </div>
                        <Amount id={id} amount={amount}/>
                    </div>
                )
            })
        }
    </div>
  )
}
export default App