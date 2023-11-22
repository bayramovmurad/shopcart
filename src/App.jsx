import Amount from "./Amount";
import { useGlobalContext } from "./context"



const App = () => {
  const { jsonData,loading } = useGlobalContext();


  if(loading){
    return(
      <div>
        <h1>Salam.....</h1>
      </div>
    )
  }

  return (
    <div>
      {
        jsonData.map(({ id, title, price, img, amount }) => {
          return (

            <div className="flex justify-between border border-black w-4/12 mx-auto p-4" key={id}>
              <div>
                <img width={100} src={img} alt={title} />
                <h3>{title}</h3>
                <p>{(price * amount).toFixed(2)}</p>
              </div>
             <Amount amount={amount} id={id}/>
            </div>

          )
        })
      }
    </div>
  )
}
export default App