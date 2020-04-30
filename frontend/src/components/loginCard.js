import React , {useState}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Login from "./login";
import Registration from "./registration";
import Information from "./information";
import {Box } from '@material-ui/core';
import {useHistory} from "react-router-dom";
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

}));

export default function SimpleCard() {
  const classes = useStyles();
  const [page,setPage] = useState({page:"login"});

  return (
    <Card className={classes.root}>
      <CardContent>
        <Box>
            {page.page == "login" && <Login setPage={setPage}/>}
            {page.page == "regist" && <Registration setPage={setPage}/>}
            {page.page == "information" && <Information/>}
        </Box>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}