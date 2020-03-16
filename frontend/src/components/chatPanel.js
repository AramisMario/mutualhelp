import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    minWidth:200,
    maxWidth: 350,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ListDividers() {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.root} aria-label="mailbox folders">
      <ListItem button>
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      </ListItem>
    </List>
  );
}