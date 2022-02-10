import './app.css';
import Middiv from './component/Middiv';
import Rightbar from './component/Rightbar';
import Sidebar from './component/Sidebar';

function App() {
  return (
    <>
     
      <div className="container">
          <Sidebar />
          <Middiv/>
          <Rightbar />
      </div>
    </>
  );
}

export default App;
