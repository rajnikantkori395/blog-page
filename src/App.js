
import './App.css';
import Featured from './components/Featured';
import Header from './components/Header';
import { Navbar } from './components/Navbar';
import { Container } from './styles/App.style';
import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
export const Context = createContext([]);

function App() {
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    const url = 'https://api.npoint.io/f89acb9ee900ca95b8dc';
    await axios.get(url)
      .then((res) => setApiData(res.data))
      .catch((err) => alert('server error', err))
  }

  useEffect(() => {
    fetchData();
  }, [])


  return (
    <>
      <Navbar />
      <Header />
      <Context.Provider value={apiData}>
        <Container>
          <Featured />
        </Container>
      </Context.Provider>

    </>

  );
}

export default App;
