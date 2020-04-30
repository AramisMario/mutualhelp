import React, {useState, useEffect} from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";
const useStyles = makeStyles((theme)=>{
    return({
        form:{
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
    });
});
export default function Registration(props){
    const {setPage} = props;
    const classes = useStyles();
    const [userInfo, setUserInfo] = useState({});
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(()=>{
      const {firstname, lastname, username, email, password} = userInfo;
      if((firstname && lastname && username && email && password) !== undefined) setIsDisabled(false);
      if((firstname && lastname && username && email && password) === "") setIsDisabled(true);
    });

    const handleChange = (e) =>{
      setUserInfo({...userInfo,[e.target.id]:e.target.value});
    }

    const signUp = () =>{
      console.log(userInfo);
      axios.post('http://localhost:7000/api/auth/signUp',{
            "firstname":userInfo.firstname, 
            "lastname":userInfo.lastname,
            "username":userInfo.username,
            "email":userInfo.email,
            "password":userInfo.password
      }).then((response)=>{
        console.log(response.data.token);
        localStorage.setItem('token',response.data.token);
        setPage({page:"information"})
      }).catch((error)=>console.log(error));
    }

    return(
      <form  className={classes.form} noValidate autoComplete="off">
          <TextField className={classes.input} 
              id="firstname" 
              label="nombre" 
              variant="outlined"
              onChange={(e)=>handleChange(e)}
          />
          <br/>
          <TextField className={classes.input} 
              id="lastname" 
              label="apellido" 
              variant="outlined"
              onChange={(e)=>handleChange(e)}
          />
          <br/>
          <TextField className={classes.input} 
              id="username" 
              label="nombre de usuario" 
              variant="outlined"
              onChange={(e)=>handleChange(e)}
          />
          <br/>
          <TextField className={classes.input} 
              id="email" 
              label="email" 
              variant="outlined"
              onChange={(e)=>handleChange(e)}
          />
          <br/>
          <TextField className={classes.input} 
              id="password" 
              type="password" 
              label="password" 
              variant="outlined" 
              onChange={(e)=>handleChange(e)}
              />
          <br/>
          {console.log(userInfo)}
          <Button 
          className={classes.button} 
          variant="outlined" 
          color="default"
          disabled={isDisabled}
          onClick={signUp}
          >
            Registrarse   
          </Button>
    </form>
    );
};