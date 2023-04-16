import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  link: {
    color: "#fff",
    textDecoration: "none",
  },
});

function Navbar() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6">Mern Auth</Typography>
        <div>
          <Button color="inherit">
            <Link className={classes.link} to="/home">
              Home
            </Link>
          </Button>
          <Button color="inherit">
            <Link className={classes.link} to="/">
              Login
            </Link>
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
