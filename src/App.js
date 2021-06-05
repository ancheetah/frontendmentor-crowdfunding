import React from 'react';
import './App.css';

// import "@fontsource/commissioner/400.css";
// import "@fontsource/commissioner/500.css";
// import "@fontsource/commissioner/700.css";

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Header from './components/HeaderComponent';
import Main from './components/MainComponent';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: 'hsl(0, 0%, 48%)',
      main: 'hsl(176, 50%, 47%)',
      contrastText: '#ffffff'
    }
  },
  typography: {
    fontSize: 16,
    fontFamily: [
      'Commissioner',
      'monospace'
    ].join(',')
  }
});

theme.props = {
  MuiButton: {
    disableElevation: true,
    size: 'small',
    textSizeSmall: true
  }
}

theme.overrides = {
  MuiCard: {
    root: {
      margin: '16px 0'
    }
  },
  MuiButton: {
    root: {
      borderRadius: 50,
      textTransform: 'none'
    }
  },
  MuiLinearProgress: {
    root: {
      height: 15,
      borderRadius: 50
    }
  }
}

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header/>
        <Main />
      </ThemeProvider>
    </div>
  );
}

export default App;
