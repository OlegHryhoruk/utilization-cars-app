import NavigationBar from './components/NavigationBar/NavigationBar';
import Map from './components/Map/Map';
import Sidebar from './components/Sidebar/Sidebar';

import './App.css';

function App() {
  return (
    <div className="app">
        <NavigationBar/>
        <Map/>
        <Sidebar/>
    </div>
  );
}

export default App;
