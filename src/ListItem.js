import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles(theme => ({
  listItem: {
    paddingTop: 8,
    paddingBottom: 8,

    "&:hover": {
      color: "#7347FF",
      backgroundColor: "#F1EDFF",
      cursor: "pointer"
    },
    "&:hover $listIcon": {
      color: "#7347FF"
    }
  },
  listIcon: {
    "&:hover": {
      color: "#7347FF"
    }
  },
  active: {
    color: "#7347FF",
    backgroundColor: "#F1EDFF"
  }
}));

export default function ListItemTest({ text, icon }) {
  const classes = useStyles();
  const [active, setActive] = useState(null);

  return (
    <>
      <ListItem className={classes.listItem} button key={text}>
        <ListItemIcon className={classes.listIcon}>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
}
