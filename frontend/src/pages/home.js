import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from "../components/appbar";
import ChatPanel from "../components/chatPanel";
import SideNav from "../components/sideNav";
import {useState} from "react";
const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    chats:{
        margin:'auto',
    }
  }));

function Home(){
    const classes = useStyles();
    const [tabs,setTabs] = useState({
        chatpanel:false,
        sidenav:false
    });

    const handleChatButtonClick = () =>{
        setTabs({sidenav:false,chatpanel:true});
    }

    const toggleDrawer = () =>{
      setTabs({chatpanel:false,sidenav:!tabs.sidenav});
    }

    return(
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item sm={12}>
            <AppBar chatButtonClick={handleChatButtonClick} sideNavClick={toggleDrawer}/>
        </Grid>
        <Grid item className={classes.chats} sm={8}>
            {tabs.chatpanel === true && <ChatPanel/>}
            {tabs.sidenav === true && <SideNav left={tabs.sidenav} toggleDrawer={toggleDrawer}/>}
        </Grid>
      </Grid>
    </div>
    );
}

export default Home;