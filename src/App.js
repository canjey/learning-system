import './App.css';
import LandingPage from './Components/LandingPage';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary:{
      light:'#fffff',
      main:'#FFCC00',
    },
    typography: {
      fontFamily: 'poppins',
    },
   

  },
});

function App() {

  return (
    <ThemeProvider theme={darkTheme}>

    <div className="App">
      <LandingPage />
    </div>
    </ThemeProvider>

  );
}

export default App;
