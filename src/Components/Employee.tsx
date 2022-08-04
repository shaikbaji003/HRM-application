import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Dashboard.css';
import { Fab } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';





export default function RecipeReviewCard() {
  // eslint-disable-next-line no-empty-pattern


  return (
    <Card className='card'>
      <CardHeader
  
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="employees data"
        subheader="id 001"
      />
      <div className='btn'>

      
      <Fab color="secondary" size="small" aria-label="edit">
  <EditIcon />
</Fab>
<Fab color="secondary" size="small" aria-label="delete">
  <DeleteIcon />
</Fab>
</div>
     
    </Card>
  );
}
