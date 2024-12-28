import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Reset from './Reset';
import Signin from './Signin';
Signin
const App = () => {
return (
    <Router>
    <Routes>
      {/* Route to extract the number */}
      <Route path="/back" element={<Signin/>}></Route>
      <Route path="/forgot/:randomString" element={<Reset/>} />
    </Routes>
  </Router>
  );
};

export default App;