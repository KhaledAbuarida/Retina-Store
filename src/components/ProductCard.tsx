import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { Product } from '../utils/AppData';

interface Props {
  product: Product;
}

export const ProductCard = ({product}: Props) => {
  return (
    <Card sx={{ width: 320 }}>
      <Typography level="title-lg">{product.name}</Typography>
      <Typography level="body-sm">{product.category}</Typography>

      <AspectRatio objectFit='contain'>
        <img
          src={product.image}
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <div>
          <Typography level="body-xs">Total price:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            ${product.price}
          </Typography>
        </div>
        <Button
          variant="solid"
          size="md"
          color="primary"
          aria-label="Add To Cart"
          sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
        >
          Add To Cart
        </Button>
      </CardContent>
    </Card>
  )
}
