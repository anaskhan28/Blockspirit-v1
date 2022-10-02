import {Navbar, Welcome, Footer, Services, Transactions} from './components';
import Market from './components/Market';
import Tutorial from './components/Tutorial';

const App = () => {
    let component
  switch(window.location.pathname){
    case "/":
      component = <App/>
      break
    case "/market":
      component = <Market/>
      break
    case "/tutorial":
      component = <Tutorial/>
      break
  }

  return (
    <><div className='gradient-bg-welcome'>
      
    </div><div className='min-h-screen'>
        <div className='gradient-bg-welcome'>

          <Navbar />

          <Welcome />
        </div>
        <Services />
        <Transactions />
        <Footer />
      </div></>
    
  )
}

export default App
