import {
    AppBar,
    IconButton,
    Toolbar,
    Typography,
    Button,
  } from "@material-ui/core";
  import React from "react";
  import MovieCreationIcon from '@material-ui/icons/MovieCreation';
  
  const Navbar = () => {
    return (
      <AppBar color="primary" position="static">
        <Toolbar>
          <IconButton color="inherit">
            <MovieCreationIcon />
          </IconButton>
          <Typography variant="h5"> MovieMate App </Typography>
        </Toolbar>
      </AppBar>
    );
  };
  
  export default Navbar;