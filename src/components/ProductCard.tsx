import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { IProduct } from "../types/productTypes";
import { useCart } from "../contexts/cart/CartContext";

export const ProductCard = ({
  _id,
  name,
  category,
  image,
  price,
}: IProduct) => {
  // contexts
  const { addCartItem } = useCart();

  const handleAddToCart = () => {
    console.log("productId (_id)", _id);
    addCartItem(_id, price);
  };

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
          onClick={handleAddToCart}
        >
          Add To Cart
        </Button>
      </CardContent>
    </Card>
  );
};
