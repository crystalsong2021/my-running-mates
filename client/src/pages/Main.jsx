import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Typography, AppBar, Box, Card, CardActions, Button, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container  } from '@material-ui/core';

import RunCircleIcon from '@mui/icons-material/RunCircle';
import BuildMap from '../component/BuildMap.jsx';
import SMSForm from '../component/SMSForm.jsx';



class Main extends React.Component {

  render() {
    return(
      <>
        <CssBaseline/>
        <AppBar position='relative'>
          <Toolbar>
          <RunCircleIcon/>
          <Typography variant='h6'>Meetup2Run</Typography>
          </Toolbar>
        </AppBar>
        <main>
            <div>
              <Container maxwidth='sm' direction='row'>
                <Typography variant='h6' align='center' color='textPrimary gutterBottom'>
                  Find other runners in your area. It's easy. It's safe.
                </Typography>
                <div>
                  <Grid Container  direction='row' spacing={2} justify='center'>
                      <Grid item direction='row'>
                          <BuildMap/>
                      </Grid>

                      <Grid item  direction='row'>
                          <Button variant='contained' color='primary'>Hello1</Button>
                      </Grid>

                      <Grid item direction='row'>
                          <Button variant='contained' color='secondary'>Hello2</Button>
                      </Grid>


                  </Grid>
                  <Grid Container  spacing={2} justify='center'>

                  <Typography variant='subtitle2' align='center' color='textPrimary gutterBottom'>
                  You can send event information to your phone right here.
                  </Typography>
                      <Grid item >
                          <SMSForm/>
                      </Grid>

                  </Grid>
                </div>

              </Container>
            </div>


        </main>



      </>
    )
  }


}
export default Main;