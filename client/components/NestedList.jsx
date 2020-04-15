import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [category, setCategory] = React.useState('');

  const handleClick = () => {
    setOpen(!open);
  };

  const updateCategory = (text) => {
    setCategory(text);
  }

  return (
    <List
      component="nav"
      className={classes.root}
    >

      <ListItem button onClick={handleClick}>
      <ListItemIcon>
        <AddIcon />
      </ListItemIcon>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <form className={classes.root} noValidate autoComplete="off"
              onSubmit={(e) => {
                e.preventDefault();
                props.addCategory(category);
                updateCategory('');
                handleClick();
              }}>
              <TextField
                id="category-input"
                label="Add Category"
                variant="filled"
                value={category}
                onChange={(e) => updateCategory(e.target.value)}
              />
            </form>
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}
