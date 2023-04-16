import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import {AiFillAlert} from "react-icons/ai"

const useStyles = makeStyles({
  typo: {
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <Box>
      <Typography variant="h3" className={classes.typo}>
       <AiFillAlert /> Welcome to the Home Page
      </Typography>
    </Box>
  );
};

export default Home;
