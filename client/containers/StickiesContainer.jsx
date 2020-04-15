import React, { useState } from "react"
import Stickies from "../components/Stickies"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}))

const StickiesContainer = () => {
  const [stickyNote, setStickyNote] = useState([
    {
      stickyId: 1,
      name: "To-Do List",
      items: [
        {
          itemId: 1,
          content: "Workout",
          additional: "100 pull-ups, 100push-ups, 200 sit-ups",
          completed: true,
        },
        {
          itemId: 1,
          content: "teeeeeeest",
          completed: true,
        },
        {
          itemId: 1,
          content: "teeeeeeest",
          completed: true,
        },
        {
          itemId: 1,
          content: "teeeeeeest",
          completed: true,
        },
      ],
    },
    {
      stickyId: 2,
      name: "Grocery",
      items: [
        {
          itemId: 1,
          content: "teeeedfghjnsfdeeest",
          completed: true,
        },
      ],
    },
    {
      stickyId: 3,
      name: "party",
      items: [
        {
          itemId: 1,
          content: "teeeedgfhjddfgjseeest",
          completed: true,
        },
      ],
    },
    {
      stickyId: 3,
      name: "party",
      items: [
        {
          itemId: 1,
          content: "teeeedgfhjddfgjseeest",

          completed: true,
        },
      ],
    },
  ])
  function passingStateToChild(newValue) {
    setStickyNote(newValue);
  }

  // const [grabData, setGrabData] = useState(false);
  // useEffect(() => {
  //   fetch(`/api/${id}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       // console.log(data);
  //       setState(data);
  //     });
  // }, [grabData]);

  const stickyData = stickyNote.map((sticky) => {
    return (
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Stickies setStickyNote={passingStateToChild} stickyData={sticky} />
      </Grid>
    )
  })

  const classes = useStyles()
  return (
    <div>
      <Grid container spacing={3}>
        {stickyData}
      </Grid>
    </div>
  )
}

export default StickiesContainer
