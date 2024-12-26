
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Reset from './Reset';
const App = () => {
return (
    <Router>
    <Routes>
      {/* Route to extract the number */}
      <Route path="/forgot/:randomString" element={<Reset/>} />
    </Routes>
  </Router>
  );
};

export default App;