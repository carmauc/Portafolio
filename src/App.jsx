import { useState } from 'react'
import Dashboard from './components/Dashboard';
import Loading from './components/Loading';


function App() {
  return(
    <div>
      <Dashboard/>
    </div>
  )
  // const [loading, setLoading] = useState(true);
  // setTimeout(() => {
  //     setLoading(false);
  // }, 7200);

  // // return <div>{loading ? <Loading /> : <Dashboard />}</div>;
}

export default App
