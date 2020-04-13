import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from "axios";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 300,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const handleSendFRequest = async () =>{
  axios.post('http://localhost:7000/api/user/friendRequest',{
      'username':"JanerGonzalez",
	    'myId':'5e8bd71b1d8a2719387eeffd' 
  }).then((response)=>{console.log(response)})
}

export default function UserCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.username}
        </Typography>
        <Typography variant="body2" component="p">
            {props.description}
          <br />
        </Typography>
        <div>
            <Typography color="textPrimary" component="h4">Debilidades</Typography>
            <ul>
                {props.weaknesses.map((weakness,index)=>{
                    return(
                        <li key={index}>
                            <Typography className={classes.pos} color="textSecondary">
                                {weakness}
                            </Typography>
                        </li>
                    );                  
                })}
            </ul>

        </div>
        <br/>
        <div> 
           <Typography color="textPrimary" component="h4">Habilidades</Typography>
            <ul>
                {props.skills.map((skill,index)=>{
                    return(
                        <li key={index}>
                            <Typography  className={classes.pos} color="textSecondary">
                                {skill}
                            </Typography>
                        </li>

                           );
                })}   
            </ul>
                    
        </div>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleSendFRequest}>enviar solicitud</Button>
      </CardActions>
    </Card>
  );
}