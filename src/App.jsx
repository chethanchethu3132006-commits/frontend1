import { useState ,useEffect} from 'react'

function App() {
  const [income, setincome] = useState(null)
  useEffect(()=>{
    async  function fetchincome(){
      try{
        const response=await fetch("http://localhost:3000/api/income");
        const data=await response.json();
        setincome(data);
      }
      catch (error){
        console.log("eroor");
      }
    }
    fetchincome();
  },[]);
  return (
    <div>
      <h1>My Activity Tracker</h1>
      {income && (
        <div>
          <h2>Income: ₹{income.amount}</h2>
          <p>Description: {income.description}</p>
        </div>
      )}
    </div>
  )
}
export default App;
