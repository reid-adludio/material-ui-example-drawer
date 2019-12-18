import React, { useEffect } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

import ListItemTest from "./ListItem";

const drawerWidth = 290;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    backgroundColor: "#EFEFEF",
    boxShadow: "none"
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    backgroundColor: "white"
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "black"
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#D5D5D5",
    border: "none"
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    backgroundColor: "#D4D4D4"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth,
    backgroundColor: "white"
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0,
    backgroundColor: "white"
  },
  username: {
    padding: "1rem"
  },
  title: {
    position: "fixed",
    left: "45%"
  },
  mainList: {
    backgroundColor: "#EFEFEF",
    paddingTop: 0,
    paddingBottom: 0
  },
  secondaryList: {
    backgroundColor: "#D5D5D5",
    paddingTop: 0,
    paddingBottom: 0
  },
  listItem: {
    paddingTop: 8,
    paddingBottom: 8,

    "&:hover": {
      color: "#7347FF",
      backgroundColor: "#F1EDFF",
      cursor: "pointer"
    }
  }
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (window.innerWidth > 1280) {
      setOpen(true);
    }
  }, []);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            disableRipple="true"
            edge="start"
            className={clsx(classes.menuButton, open)}
            style={{ backgroundColor: "transparent" }}
          >
            <MenuIcon style={{ backgroundColor: "transparent" }} />
          </IconButton>
          <Typography color="textSecondary" className={classes.title}>
            Projects
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <Typography className={classes.username}>John Doe</Typography>
        </div>
        <List className={classes.mainList}>
          <ListItemTest text="ATE" icon={<MailIcon />} />
          <ListItemTest text="Tag Builder" icon={<InboxIcon />} />
          <ListItemTest text="BIO Reporting" icon={<MailIcon />} />
          <ListItemTest text="Studio" icon={<InboxIcon />} />
          <ListItemTest text="Projects" icon={<MailIcon />} />
        </List>
        <List className={classes.secondaryList}>
          <ListItemTest text="Support" icon={<InboxIcon />} />
          <ListItemTest text="Logout" icon={<MailIcon />} />
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <p>
          lofwjhfjwehfbkhewbfiwegbfkhewbibfewifkbweifbiuwebfiwebciewbfibewiufbiwebfiewbfiwebfiwbiufbweifbiewfibuwe
        </p>
      </main>
    </div>
  );
}
