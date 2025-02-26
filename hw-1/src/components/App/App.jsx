import './App.css'
import ImageComponent from '../ImageComponent'
import VideoComponent from '../VideoComponent'
import ParagraphsComponent from '../ParagraphsComponent'
import ListsComponent from '../ListsComponent'

function App() {

  return (
    <>
      <div className="forest">
        <ImageComponent />
      </div>
      <div className="video-content">
        <VideoComponent />
      </div>
      <div className="video-content">
        <ParagraphsComponent />
      </div>
      <div className="video-content">
        <ListsComponent />
      </div>
    </>
  );
}

export default App;
