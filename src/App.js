import { Typography } from '@mui/material';
import './App.css';
import LandingPage from './Components/LandingPage';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Features from './Components/LandingPage/Features';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary:{
      // light:'#fffff',
      main:'#FFCC00',
    },
    typography: {
      p: {
        fontSize: "4rem",
        fontWeight: 700,
      },
    },
   

  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>

    <div className="App">
      <Features />
      <Typography variant='p'>
        Hi My name is Carol
      </Typography>
    </div>
    </ThemeProvider>

  );
}

export default App;
