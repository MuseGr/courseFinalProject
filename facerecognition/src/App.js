import './App.css';
import Navigation from './Componetns/Navigation/Navigation';
import Logo from './Componetns/Logo/Logo';
import ImageLinkForm from './Componetns/ImageLinkForm/ImageLinkForm';
import Rank from './Componetns/Rank/Rank';

import 'tachyons'
//  import Particles from 'react-particles-js';

function App() {
  return (
    <div className="App">
      
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/*<FaceRecognition /> */}
    </div>
  );
}

export default App;
