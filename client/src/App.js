import logo from './logo.svg';
import './App.css';
import {Home} from './Home/Home'
import { Login } from './Login/Login';
import {Register} from './Register/Register'
import {Logout} from './Logout/Logout'
import {Cart} from './Cart/Cart'
import { Route,BrowserRouter,Routes } from 'react-router-dom';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
import {NewProduct}  from './newProduct/NewProduct';

const queryClient = new QueryClient();

function App() {


  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/Home" element={<Home />} />
                      <Route path="/logout" element={<Logout />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="/newProduct" element={<NewProduct />} />
                      <Route path="/register" element={<Register />} />
                      <Route path="/cart" element={<Cart />} />
                  </Routes>
          </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
