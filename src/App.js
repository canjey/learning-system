import './App.css';
import LandingPage from './Components/LandingPage';
import { ThemeProvider, createTheme } from '@mui/material/styles';



export const themeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#FFCC00',
    },
    secondary: {
      main: '#000000',
    },
  },
  typography: {
    fontFamily: 'poppins',
    p: {
      fontFamily: 'poppins',
    },
  },
  
};

function App() {

  return (
    <ThemeProvider theme={createTheme(themeOptions) }>

    <div className="App">
      <LandingPage />
    </div>
    </ThemeProvider>

  );
}

export default App;
