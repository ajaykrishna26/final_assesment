//Write your missing code here

import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import AddBoxIcon from '@mui/icons-material/AddBox';
const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            EmployeeApp
          </Typography>
          <Button component={Link} to={'/'} style={{ textDecoration: "none", color: "white" }}>
              <HomeIcon></HomeIcon>
            </Button>
            <Button component={Link} to={'/add'} style={{ textDecoration: "none", color: "white" }}>
              <AddBoxIcon></AddBoxIcon>
            </Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
