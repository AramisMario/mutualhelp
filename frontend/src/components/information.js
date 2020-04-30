import React, {useEffect, useState} from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {useHistory} from "react-router-dom";
import axios from "axios";
const useStyles = makeStyles((theme)=>{
    return({
        form:{
            position:"relative",
            paddingTop: '50px',
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
            marginBottom:'15px',
          },
          textArea:{
            width:'75%',
            minWidth:'25ch',
            marginBottom:'15px',
          },
          menu:{
              width:"75%",
              minWidth:"25ch",
              margin:"auto",
              position:"relative",
              borderStyle:"solid",
              borderRadius:"5px",
              maxHeight: "90px",
              overflowY:"auto"
          },
          menuItem:{
            width:"100%",
            margin:"auto",
        }
    });
});
const Information = () =>{
    let history = useHistory();
    const classes = useStyles();
    const [description, setDecription] = useState("");
    const [skills, setSkills] = useState([]);
    const [skill, setSkill] = useState("");
    const [weaknesses, setWeaknesses] = useState([]);
    const [weakness, setWeakness] = useState("");


    const saveInfo = () =>{
        const token = localStorage.getItem('token');
        console.log("saveInfo ",token);
        axios.post('http://localhost:7000/api/user/addInfo',{
          "skill":skill,
          "weakness":weakness,
          "description":description
        },{
          headers:
          {"authorization":"Bearer "+token, "Content-Type":"application/json"}
        })
        .then((response)=>console.log(response.data.message))
        .catch((error)=>console.log(error));

    }

    const handleChangeDescription = (e) =>{
      setDecription(e.target.value);
    }
    const handleChangeSkill = (query) =>{
      setSkill(query);
          axios.get('http://localhost:7000/api/topic/searchTopic/'+query,{
          })
          .then(response=>{
            setSkills(response.data);
            console.log(response.data);
          }).catch((Error)=>console.log(Error));
    }
    const handleChangeWeakness = (query) =>{
      setWeakness(query);
      axios.get('http://localhost:7000/api/topic/searchTopic/'+query,{
          })
          .then(response=>{
            setWeaknesses(response.data);
            console.log(response.data);
          }).catch((Error)=>console.log(Error));
    }
      return(
        <form className={classes.form} autoComplete="off">
          <TextField
            className={classes.textArea}
            id="outlined-multiline-static"
            multiline
            rows={4}
            placeholder="Comentanos sobre ti, tus intereses por ejemplo"
            variant="outlined"
            onChange={(e)=>handleChangeDescription(e)}
          />
          <TextField className={classes.input} 
              id="skill" 
              variant="outlined"
              placeholder="Eres bueno en.."
              value={skill}
              onChange={(e)=>handleChangeSkill(e.target.value)}
          />
          
        {skills.length > 0 ? 
            <div className={classes.menu}>
                {skills.map((topic,index)=>{
                    return( 
                        <MenuItem 
                        key={index} 
                        className={classes.menuItem}
                        onClick={()=>{setSkill(topic.topic);setSkills([])}}
                        >
                            {topic.topic}
                        </MenuItem>
                    );
                })}
             </div>: null}
         
          <TextField className={classes.input} 
              id="weakness" 
              variant="outlined"
              placeholder="necesitas ayuda en.."
              value={weakness}
              onChange={(e)=>handleChangeWeakness(e.target.value)}
          />

        {weaknesses.length > 0 ? 
            <div className={classes.menu}>
                {weaknesses.map((topic,index)=>{
                    return( 
                        <MenuItem 
                        key={index} 
                        className={classes.menuItem}
                        onClick={()=>{setWeakness(topic.topic);setWeaknesses([])}}
                        >
                            {topic.topic}
                        </MenuItem>
                    );
                })}
            </div>: null}

            <Button 
            className={classes.button} 
            variant="outlined" 
            color="primary"
            onClick={()=>{
              saveInfo();
              history.push("/home");
            }}
            >
              Guardar informacion  
            </Button>
        </form>
      );
  }

export default Information;