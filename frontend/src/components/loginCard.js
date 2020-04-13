import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Container, Box } from '@material-ui/core';
const useStyles = makeStyles((theme)=>({
  root: {
    minHeight:'70vh',
    minWidth:'40vh',
    margin:'auto'
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  form:{
    width: '75%',
    minWidth:'25ch',
    margin:'auto',
    textAlign:'center'
  },
  input:{
      marginBottom:'15px',
      width:'75%',
      minWidth:'25ch',
  },
  button:{
    width: '75%',
    minWidth:'25ch',
  },
}));

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Box>
            <form  className={classes.form} noValidate autoComplete="off">
              <TextField className={classes.input} id="username" label="username" variant="outlined" />
              <br/>
              <TextField className={classes.input} id="password" type="password" label="password" variant="outlined" />
              <br/>
              <Button className={classes.button} variant="outlined" color="primary">Iniciar sesion</Button>
            </form>
        </Box>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}