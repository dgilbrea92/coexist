import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import ExpansionPanel from "@material-ui/core/ExpansionPanel"
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import Paper from "@material-ui/core/Paper"
import Checkbox from "@material-ui/core/Checkbox"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import IconButton from "@material-ui/core/IconButton"
import Add from "@material-ui/icons/add"
import TextField from "@material-ui/core/TextField"
import { v4 as uuid } from 'uuid';

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
  const onSelectAdd = (event) => {
    event.preventDefault()
    props.setStickyNote({
      itemId: uuid(),
      content: event.target.value,
      additional: s
    })
  }

  const classes = useStyles()
  const stickyList = props.stickyData.items.map((data) => {
    return (
      <Paper elevation={0}>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-label="Expand"
            aria-controls="additional-actions2-content"
            id="additional-actions2-header"
          >
            <FormControlLabel
              aria-label="Acknowledge"
              onClick={(event) => event.stopPropagation()}
              onFocus={(event) => event.stopPropagation()}
              control={<Checkbox />}
              label={data.content}
            />
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
          <h2 className="container-header">{props.stickyData.name} </h2>
          <IconButton
            onClick={() => onSelectAdd()}
            aria-label="delete"
            className={classes.margin}
            size="small"
          >
            <Add />
          </IconButton>
          <CardContent>{stickyList}</CardContent>
          <TextField
            id="standard-multiline-flexible"
            label="Multiline"
            multiline
            rowsMax={4}
            value={props.value}
            onChange={onSelectAdd}
          />
        </CardActionArea>
      </Card>
    </div>
  )
}

export default Stickies
