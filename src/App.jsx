import './App.css'
import Home from './pages/Home'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import lionIcon from './assets/favicon.ico';

function App() {


  return (
    <HelmetProvider>
      <div className="bg-darkAqua font-poppins text-black " >
        <Helmet>
          <title>Dawson Woolley Developer Portfolio</title>
          <meta name="description" content="A professional software developer portfolio built in React with Vite" />
          <link rel="icon" type="image/svg+xml" href={lionIcon} />
        </Helmet>
          <Home />
      </div>
    </HelmetProvider>
  )
}

export default App
