import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import { Product } from '../utils/AppData';
import { IconButton } from '@mui/material';
import { useState } from 'react';

interface Props {
    CartItem: Product
}

export const CartItem = ({CartItem}: Props) => {
  const [itemQuantity, setItemQuantity] = useState(1);

  const handleIncreaseItemQuantity = () => {
    if(itemQuantity < CartItem.quantity){
      setItemQuantity(itemQuantity+1);
    }    
  }
  const handleDecreaseItemQuantity = () => {
    if(itemQuantity > 0){
      setItemQuantity(itemQuantity-1);
    }    
  }
  
  return (
    <Card sx={{ minWidth: 275, backgroundColor: '#f5f5f5' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {CartItem.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {CartItem.category}
        </Typography>
      </CardContent>
      <CardActions>
        
        {/* Increase Item Quantity */}
        <IconButton onClick={() => handleIncreaseItemQuantity()}>
          <b> + </b>
        </IconButton>

        {itemQuantity}

        <IconButton onClick={() => handleDecreaseItemQuantity()}>
          <b> - </b>
        </IconButton>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
            Delete
        </Button>
      </CardActions>
    </Card>
  )
}
