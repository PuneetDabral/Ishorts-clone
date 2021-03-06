import { Box,makeStyles } from '@material-ui/core';

//components
import Header from './components/Header';
import InfoHeader from './components/infoHeader';
import Articles from './components/Articles';

const useStyles=makeStyles({
  container:{
    marginTop:110,
    width:'59%',
    margin:'0 auto'
  }
})

function App() {
  const classes = useStyles();
  return (
    <Box>
     <Header />
     <Box className={classes.container}>
     <InfoHeader />
     <Articles />
     </Box>
    
     
    </Box>
    
   
  );
}

export default App;
