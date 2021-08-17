import './App.css';
import CountDisplay from './_components/CountDisplay/index';
import { AppBar, Toolbar } from '@material-ui/core';
import { Typography } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <AppBar position="fixed">
        <Toolbar><Typography variant="h5" noWrap>
            Counter App
          </Typography></Toolbar>
      </AppBar>
      <Toolbar />

      <div style={{margin: '20px'}}>
        <CountDisplay></CountDisplay>
      </div>
    </div>
  );
}

export default App;
