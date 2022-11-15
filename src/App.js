
import './App.css';
import Featured from './components/Featured';
import Header from './components/Header';
import { Navbar } from './components/Navbar';
import { Container, Loading } from './styles/App.style';
import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import Latest from './components/Latest';
import Trending from './components/Trending';
import Footer from './components/Footer';
import Backpacking from './components/Backpacking';
export const Context = createContext([]);

function App() {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const url = 'https://api.npoint.io/f89acb9ee900ca95b8dc';
    await axios.get(url)
      .then((res) => {
        setApiData(res.data);
        setLoading(false);
      })
      .catch((err) => alert('server error', err))

  }

  useEffect(() => {
    fetchData();

  }, [])
  console.log(apiData);

  return (
    <>
      <Navbar />
      {
        loading ? <Loading><h1>Loading...</h1></Loading> :
          <>
            <Header />
            <Context.Provider value={apiData}>
              <Container>
                <Featured />
                <Latest />
                <Trending />
                <Backpacking/>
              </Container>
            </Context.Provider>
            <Footer/>
          </>
      }
    </>
  );
}

export default App;
