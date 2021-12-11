import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Typography, AppBar, Box, Card, CardActions, Button, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container  } from '@material-ui/core';
import RunCircleIcon from '@mui/icons-material/RunCircle';
import BuildMap from '../component/BuildMap.jsx';
import SMSForm from '../component/SMSForm.jsx';



class Main extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      eventList:[]
    }
  }

  componentDidMount() {
    fetch('/event')
      .then(res => res.json())
      .then(
        data => {
          console.log('data from backend', data);
          this.setState({
            eventList: data
          })
        }
      )
  }
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

                <Typography variant='h6' align='center' color='textPrimary'>
                  Find other runners in your area. It's easy. It's safe.
                </Typography>
                <div>
                  {/* <Grid Container spacing={2} justify='center'> */}
                          <BuildMap/>
                  {/* </Grid> */}
                  {/* <Grid Container  spacing={2} justify='center'> */}

                    <Typography variant='subtitle2' align='center'>
                    You can send event information to your phone right here.
                    </Typography>
                        {/* <Grid item > */}
                            <SMSForm/>
                        {/* </Grid> */}

                    {/* </Grid> */}
                </div>


            </div>


        </main>



      </>
    )
  }


}
export default Main;