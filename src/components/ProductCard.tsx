import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { addItemToCart } from "../api/cartAPI";
import { ICartItem } from "../types/cartTypes";
import { IProduct } from "../types/productTypes";

export const ProductCard = ({ name, category, image, price }: IProduct) => {
  return (
    <Card sx={{ width: 320 }}>
      <Typography level="title-lg">{name}</Typography>
      <Typography level="body-sm">{category}</Typography>

      <AspectRatio objectFit="contain">
        <img src={image} loading="lazy" alt="" />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <div>
          <Typography level="body-xs">Total price:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            ${price}
          </Typography>
        </div>
        <Button
          variant="solid"
          size="md"
          color="primary"
          aria-label="Add To Cart"
          sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
          // onClick={handleAddToCart}
        >
          Add To Cart
        </Button>
      </CardContent>
    </Card>
  );
};
