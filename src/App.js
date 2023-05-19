import './App.css';
import Form from './components/Form';
import SubmissionsPage from './components/SubmissionsPage';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' Component={Form}/>
          <Route path = '/submissions' Component = {SubmissionsPage}/>
        </Routes>  
      </div>
    </Router>   
  );
}

export default App;
