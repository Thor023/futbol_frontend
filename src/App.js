import { Router as Routes, Route } from 'react-router-dom';
import UserList from './components/UserList';


export default function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<UserList />} />
      </Routes>
   </Router>
  );
}