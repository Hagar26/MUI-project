import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button, Rating} from '@mui/material';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

const ProductCard = ({ image, title, description, price, rating }) => {
  return (
    <Card >
      <CardActionArea>
        <CardMedia component="img" height="170" image={image} alt={title}/>

        <CardContent>
          <Rating value={rating} precision={0.5} readOnly/>
          <Typography gutterBottom variant="h6" sx={{fontWeight:"bold"}}>
            {title}
          </Typography>

          <Typography variant="body2">
            {description}
          </Typography>

          <Typography sx={{fontWeight:"bold"}} color="primary">
            ${price}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button size="small" variant="contained" fullWidth>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;