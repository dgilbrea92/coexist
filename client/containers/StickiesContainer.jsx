import React from "react"
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

const MainContainer = () => {
  const classes = useStyles()
  return (
    <div>
      <h1 className="container-header">Board Name</h1>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Stickies className={classes.paper} />
        </Grid>
      </Grid>
    </div>
  )
}

export default MainContainer
