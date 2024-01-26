import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import { Product } from '../utils/AppData';

interface Props {
    CartItem: Product
}

export const CartItem = ({CartItem}: Props) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {CartItem.name}
          product name
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {CartItem.category}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
            Delete
        </Button>
      </CardActions>
    </Card>
  )
}
