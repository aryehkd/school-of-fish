import React, { FunctionComponent } from 'react'
import { default as MuiAppBar } from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

// @ts-ignore
export interface AppBarProps {
  children: React.ReactNode
}

export const AppBar: FunctionComponent<AppBarProps> = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MuiAppBar 
        position="static" 
        sx={{ 
          display: 'flex', 
          flexDirection: 'row-reverse', 
          bgcolor: 'white', 
          boxShadow: 'none', 
          border: 1, 
          borderColor: 'black' 
        }}
      >
        <Toolbar>
          <IconButton size="large">
            <AddIcon sx={{ color: 'black' }}/>
          </IconButton>
        </Toolbar>
      </MuiAppBar>
      {props.children}
    </Box>
  )
}

export default AppBar
