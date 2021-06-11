import './App.css';
import { MovieList } from './components/MovieList';
import {useState} from 'react'
import {Navbar ,Nav}from'react-bootstrap';
import Filter from './components/Filter';
import Add from './components/Add';


function App({movieList,setMovieList}) {


  const [search, setSearch] = useState('');
  const [rate, setRate] = useState(0);
  const HandleTitle = (search)=> setSearch(search);
  const HandleRate = (rate) => setRate(rate);
  const movieAdd = (id,title,posterUrl,description,rate) =>
setMovieList([...movieList, {id, title,posterUrl,description ,rate}]);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
  <Navbar.Brand style={{color:'red'}}href="#">Movies</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav 
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '200px' }}
      navbarScroll
    >
    </Nav>
    <Filter HandleTitle={HandleTitle} HandleRate={HandleRate} ></Filter>
  </Navbar.Collapse>
</Navbar>
          <MovieList movieList={movieList.filter(el=> el.title.toLowerCase().includes(search) && el.rate >= rate)}/>
          <br/>
          <Add movieAdd={movieAdd}></Add>
    </div>
  )
}

export default App;
