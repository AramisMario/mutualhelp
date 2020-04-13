import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from "../components/appbar";
import ChatPanel from "../components/chatPanel";
import SideNav from "../components/sideNav";
import {useState} from "react";
import UserCard from "../components/userCard";
import axios from "axios";
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
        sidenav:false,
        results:false
    });
    const [users, setUsers] = useState([]);

    const handleChatButtonClick = () =>{
        setTabs({sidenav:false,chatpanel:true,results:false});
    }

    const toggleDrawer = () =>{
      setTabs({chatpanel:false,sidenav:!tabs.sidenav,results:false});
    }

    const handleSearch = (query) =>{
      if(query === ""){
        setUsers([]);
      }else{
        axios.get('http://localhost:7000/api/user/searchUsers/'+query,{
        })
        .then(response=>{
          setUsers(response.data);
          console.log(users);
          setTabs({sidenav:false,chatpanel:false,results:true});
        }).catch((Error)=>console.log(Error));
      }
    }

    return(
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item sm={12}>
            <AppBar chatButtonClick={handleChatButtonClick} 
              sideNavClick={toggleDrawer}
              handleSearch={handleSearch}
              />
        </Grid>
        <Grid item className={classes.chats} sm={8}>
            {tabs.chatpanel === true && <ChatPanel/>}
            {tabs.sidenav === true && <SideNav left={tabs.sidenav} toggleDrawer={toggleDrawer}/>}
            {
            users.length > 0 
              && 
              <div>
                {users.map((user,index) =>{
                  return(
                      <UserCard 
                        key={index} 
                        username={user.username} 
                        description={user.description}
                        weaknesses={user.weaknesses}
                        skills={user.skills}
                        />
                  );
                })}
              </div>
            }
        </Grid>

      </Grid>
    </div>
    );
}

export default Home;