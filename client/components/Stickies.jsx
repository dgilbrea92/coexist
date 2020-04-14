import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import ExpansionPanel from "@material-ui/core/ExpansionPanel"
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import Paper from "@material-ui/core/Paper"

const useStyles = makeStyles((theme) => ({
  root: {
    "& > span": {
      margin: theme.spacing(2),
    },
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}))
const Stickies = (props) => {
  const classes = useStyles()
  const stickyList = props.stickyData.items.map((data) => {
    return (
      <Paper elevation={0}>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>{data.content}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>{data.additional}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Paper>
    )
  })
  return (
    <div>
      <Card>
        <CardActionArea>
          <h2 className="container-header">{props.stickyData.name}</h2>
          <CardContent>{stickyList}</CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}

export default Stickies
