import React from "react"
import Button from '@mui/material/Button'


export default function ButtonF() {
    return (
    
      <Button 
         className ="btn"
         variant="outlined" 
         
         onClick={() => {
          console.log('clicked');
        }}
         sx={{
          ':hover': {
            bgcolor: 'green', 
            color: 'white',
          },
        }}
  >CHECK SOME DATA</Button>
    
    
    )
}