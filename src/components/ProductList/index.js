import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { addCart } from "../../redux/action/cartAction";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./_ProductList.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const ProductList = () => {
  const classes = useStyles();
  const dipatch = useDispatch();
  const products = useSelector((state) => state.dataProduct.dataProduct);
  const itemsInCart = useSelector((state) => state.itemsInCart.itemsInCart);
  const [pathname, setPathname] = useState(null);
  let location = useLocation();

  useEffect(() => {
    const a = products;
    setPathname(location.pathname);
  }, [location]);
  const addProducts = (product) => {
    const arr = [...itemsInCart];
    const found = arr.find((f) => f.id === product.id);
    if (found) {
      found.quantityorder++;
      dipatch(addCart(arr));
    } else {
      arr.push(product);
      dipatch(addCart(arr));
    }
  };

  return (
    <div className="lovelydog">
      <Container className="lovelydog-wrapper" maxWidth="xl">
        {products && products.length == 0 && (
          <div className="loading">
            <CircularProgress /> <p>Đang tải dữ liệu</p>
          </div>
        )}
        <Grid container spacing={2}>
          {products &&
            products.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <Link to={`/productDetails?id=${card._id}`}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={card.avatar}
                      title="Image title"
                    />
                  </Link>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Grid container spacing={1} className="no-margin ptx2">
                      <Grid item md={6}>
                        <br />
                        {card.quantity > 0 ? (
                          <span>
                            <b>Số lượng:</b> {card.quantity}
                          </span>
                        ) : (
                          <span>
                            <b>
                              <i>Hết hàng</i>
                            </b>
                          </span>
                        )}
                      </Grid>
                    </Grid>
                  </CardContent>
                  <CardActions className="mlx1">
                    <span>Giá: {card.price} </span>
                    <Typography>$</Typography>
                    {card.quantity > 0 && (
                      <Button
                        size="small"
                        color="primary"
                        variant="outlined"
                        onClick={() => addProducts(card)}
                      >
                        Thêm vào giỏ hàng
                      </Button>
                    )}
                  </CardActions>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>
    </div>
  );
};

export default ProductList;
