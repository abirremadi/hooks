import './App.css';
import {v4 as uuidv4} from 'uuid'
import { MovieList } from './components/MovieList';
import {useState} from 'react'
import {Navbar ,Nav}from'react-bootstrap';
import Filter from './components/Filter';
import Add from './components/Add';


function App() {
   const Movies=[{
     id:uuidv4(),
     title:"No Escape",
     posterUrl:"https://m.media-amazon.com/images/M/MV5BMjE0MDI3NTE5NF5BMl5BanBnXkFtZTgwNzI3ODM2NjE@._V1_.jpg",
     description :"No Escape is a 2015 American action thriller film directed by John Erick Dowdle, who co-wrote the screenplay with his brother, Drew Dowdle. The film stars Owen Wilson, Lake Bell, and Pierce Brosnan, and tells the story of an expat engineer trapped with his family in an unidentified country .",
     rate:"5",
   },
   {
    id:uuidv4(),
    title:"Parasite",
    posterUrl:"https://img4.cdn.cinoche.com/images/591587145c8e772c64fa4847eba6cbf5.jpg",
    description :" est un film sud-coréen coécrit et réalisé par Bong Joon-ho, sorti en 2019,La famille Kim, pauvre et au chômage, vit d'expédients dans un taudis en sous-sol. Un jour, le fils réussit, au moyen d'un faux diplôme, à se faire embaucher pour donner des cours d'anglais à la fille d'une famille  .",
    rate:"4"
   },
   {
    id:uuidv4(),
    title:"Train to Busan",
    posterUrl:"https://miro.medium.com/max/1000/1*0orwpxKA-KkzuOHJNBhN8w.jpeg",
    description :"is a 2016 South Korean action horror film[4] directed by Yeon Sang-ho and starring Gong Yoo, Jung Yu-mi, Ma Dong-seok, Kim Su-an, Choi Woo-shik, Ahn So-hee and Kim Eui-sung.[5] The film mostly takes place on a high-speed train from Seoul to Busan as a zombie .",
    rate:"4"
   },
   {
    id:uuidv4(),
    title:"The invisible guest",
    posterUrl:"https://m.media-amazon.com/images/M/MV5BMDk0YzAwYjktMWFiZi00Y2FmLWJmMmMtMzUyZDZmMmU5MjkzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    description :"The Invisible Guest (Spanish: Contratiempo, lit. 'Setback') is a 2016 Spanish mystery thriller film written and directed by Oriol Paulo. It was released in Spain on 6 January 2017. The film opened to lukewarm critical response, but was a commercial success, grossingmillion against its .",
    rate:"8"
   },
  ];
  
  const [movieList,setMovieList] = useState(Movies);
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
