import React, { useState, useEffect } from 'react';
import Stickies from '../components/Stickies';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TopNav from '../components/TopNav';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const StickiesContainer = () => {
  const [stickies, setStickies] = useState([]);

  useEffect(() => {
    fetch('/api/stickies/1')
      .then(res => res.json())
      .then(data => {
        const newStickies = [];
        // iterate over array of data returned from db
        for (let i = 0; i < data.length; i++) {
          // check if output array already contains the current stickyId object
          const index = newStickies.findIndex(
            sticky => sticky.stickyId === data[i].sticky_id
          );

          // an index of -1 means no match was found
          if (index === -1) {
            // if no match: create a new object with itemid, name, items array filled with nested data
            const pushObject = {
              stickyId: data[i].sticky_id,
              name: data[i].name,
              items: [
                {
                  // data to appear upon expansion of row
                  itemId: data[i].item_id,
                  content: data[i].content,
                  additional: data[i].additional,
                  completed: data[i].complete,
                },
              ],
            };
            // push reformatted sticky data into array
            newStickies.push(pushObject);
          } else {
            // if the sticky already exists, then just add a new object to its items array
            const pushObject = {
              itemId: data[i].item_id,
              content: data[i].content,
              additional: data[i].additional,
              completed: data[i].complete,
            };

            newStickies[index].items.push(pushObject);
          }
        }
        setStickies(newStickies);
      });
  }, []);

  const classes = useStyles();
  return (
    <div>
      <TopNav />
      <h1 className='container-header'>Board Name</h1>
      <Grid container spacing={3}>
        {stickies.map((sticky, idx) => {
          return (
            <Grid key={`grid-${idx}`} item xs={12} sm={6} md={4}>
              <Stickies key={`sticky-${idx}`} stickyData={sticky} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default StickiesContainer;
