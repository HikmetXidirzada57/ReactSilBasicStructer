import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Config from "./MyRoutes/Config";
import { ClockLoader } from "react-spinners";

function App() {
  const [loading, setLodaing] = useState(false)
  useEffect (() => {
    setLodaing(true)
    setTimeout(() => {
      setLodaing(false)
    }, 1000);
  }, [])
  
  return (
    <div className="main-app">
    <BrowserRouter>
    {loading ?(
       <ClockLoader color={"#36d7b7"} size={50} loading={loading}/>
      ):(
    <Layout>
   <div className="App">
        <Config/>
      </div>
    </Layout>
      )}
    </BrowserRouter>
    </div>
 
    
  );
}

export default App;
