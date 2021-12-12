import './App.css';
import Camptun from './CampingTunisie.jpg';

function App() {
  return (
    <div className="App">
            {/*} image from SRC FOLDER{*/}
        <img src={Camptun} className="App-image" alt="camptunisie" />
        <iframe className="videoo" src="https://www.youtube.com/embed/w7ejDZ8SWv8" title="YouTube video player" frameborder="0" allow="accelerometer;
         autoplay; clipboard-write; encrypted-media;
         gyroscope; picture-in-picture" allowfullscreen>
         </iframe>
             {/*} image from PUBLIC FOLDER{*/}
         <img className="camp"src='./camp.jpg' alt='imagedecamping'/>
    </div>
  );
}

export default App;
