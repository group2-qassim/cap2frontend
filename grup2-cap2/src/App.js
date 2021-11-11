import './App.css';
import Podcast from "./itunes/Podcast/index"
import {Route,Routes,Link} from  "react-router-dom"
import MusicVideo from "./itunes/MusicVideo"
import Music from "./itunes/Music"
import Audiobook from "./itunes/Audiobook"


function App() {
  return (
  <>

<div className="App">

  </div>
  
  <div class="wrapper">
        <div id="navbar">
            <ul id="home">
            <Link to="/Podcast" class="link-style">Podcast</Link>
            <Link to="/MusicVideo" class="link-style">MusicVideo</Link>
            <Link to="/Music" class="link-style">Music</Link>
            <Link to="/Audiobook" class="link-style">Audiobook</Link>
            <Link to="/TvShow" class="link-style">TvShow</Link>
            <Link to="/Software" class="link-style">Software</Link>
            <Link to="/Ebook" class="link-style">Ebook</Link>
            <Link to="/HOME" class="link-style">HOME</Link>
            <Link to="/Favorite" class="link-style">Favorite</Link>

            


            </ul>
            
                
                {/* <Link to='/' class="link-style"> <li class="link-style"> HOME</li> </Link> */}
           
            
            <ul id="fovarit">
               {/* <Link to='' class="link-style"> <li id="favor" >FAVORITE</li> </Link> */}
            </ul>
        </div>

        


        

    </div>
    
   <Routes>
   <Route exact path="/Audiobook" element={<Audiobook />} />
   <Route path="/Ebook" element={<Ebook/>} />
    <Route path="/Favorite" element={<Favorite />} />
    <Route exact path="/Home" element={<Home />} />
    <Route exact path="/Music" element={<Music />} />
    <Route exact path="/MusicVideo" element={<MusicVideo />} />
    <Route exact path="/Podcast" element={<Podcast />} />
    <Route exact path="/Software" element={<Software />} />
    <Route exact path="/TvShow" element={<TvShow />} />
   
 
   </Routes>
    <div id="footer">
        <h2>All  &copy; footer</h2>
    </div>
 
  </>
  )}

export default App;
