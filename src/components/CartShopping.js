import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector } from "react-redux";
import {
  removeCart,
  removeItem,
  addQuantity,
} from "../redux/action/cartAction";
import NewOrder from "./FormOrder.js";
import ImageHOC from "./ImageHOC/imageHOC";

const useStyles = makeStyles((theme) => ({
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
}));

const MyCart = () => {
  const addedProducts = useSelector((state) => state.itemsInCart.itemsInCart);
  const dispatch = useDispatch();
  const [showNewFormOrder, setShowNewFormOrder] = useState(false);
  const [total, setTotal] = useState();

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    const countTotal = async () => {
      await setTotal(calculatePrice());
    };
    countTotal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const classes = useStyles();

  const removeItemFromArr = (product) => {
    const arr = [...addedProducts];
    const index = arr.findIndex((f) => f.id === product.id);
    const found = arr.find((f) => f.id === product.id);
    if (index > -1 && found) {
      found.quantityorder = 1;
      arr.splice(index, 1);
      dispatch(removeItem(arr));
    }
  };

  const addedQuantityFromArr = (product) => {
    const arr = [...addedProducts];
    const found = arr.find((f) => f.id === product.id);
    if (found) {
      found.quantityorder++;
    }
    dispatch(addQuantity(arr));
  };

  const subQuantityFromArr = (product) => {
    const arr = [...addedProducts];
    const found = arr.find((f) => f._id === product._id);
    if (found) {
      found.quantityorder--;
    }
    dispatch(addQuantity(arr));
  };

  const calculatePrice = () => {
    if (addedProducts.length) {
      const arr = [];
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      // eslint-disable-next-line
      addedProducts.map((data) => {
        arr.push(data.price * data.quantityorder);
      });
      return arr.reduce(reducer);
    }
  };

  const setNewFormOrder = (status) => {
    setShowNewFormOrder(status);
  };

  return (
    <div className="cart">
      {showNewFormOrder ? (
        <NewOrder
          setNewFormOrder={setNewFormOrder}
          total={total}
          items={addedProducts}
        />
      ) : null}
      <Container className="cart-wrapper" maxWidth="xl">
        {addedProducts && addedProducts.length > 0 ? (
          <div>
            <span>B???n ???? order:</span>
            <Grid container spacing={2}>
              {addedProducts &&
                addedProducts.map((card) => (
                  <Grid item key={card.id} md={8} className="item-cart">
                    <Card className={classes.card}>
                      <Grid container spacing={1}>
                        <Grid item md={4}>
                          <CardMedia
                            className={classes.cardMedia}
                            image={card.avatar}
                            title="Image title"
                          />
                        </Grid>
                        <Grid item md={8}>
                          <CardContent className={classes.cardContent}>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                            >
                              {card.name}
                            </Typography>
                            <Typography>
                              <span>Gi?? ti???n: {card.price}$</span>
                            </Typography>
                          </CardContent>
                          <CardActions>
                            <Button
                              size="small"
                              color="primary"
                              onClick={() => subQuantityFromArr(card)}
                            >
                              <ArrowDropDownIcon fontSize="large" />
                            </Button>
                            <Typography>{card.quantityorder}</Typography>
                            <Button
                              size="small"
                              color="primary"
                              onClick={() => addedQuantityFromArr(card)}
                            >
                              <ArrowDropUpIcon fontSize="large" />
                            </Button>
                            <Button onClick={() => removeItemFromArr(card)}>
                              <DeleteIcon></DeleteIcon>
                            </Button>
                          </CardActions>
                        </Grid>
                      </Grid>
                    </Card>
                  </Grid>
                ))}
              <Grid item md={4} className="total">
                <Card className="total-price">
                  <span>Ho?? ????n</span>
                  <Grid container spacing={1}>
                    <Grid item md={3}>
                      <Typography>T???ng ti???n:</Typography>
                    </Grid>
                    <Grid item md={2}>
                      <span>{calculatePrice()}$</span>
                    </Grid>
                  </Grid>
                  <Button
                    className="primary"
                    onClick={() => setNewFormOrder(true)}
                  >
                    G???i ????n h??ng
                  </Button>
                </Card>
              </Grid>
            </Grid>
            <span>
              <Button
                onClick={() => dispatch(removeCart())}
                className="primary"
              >
                Xo?? h???t
              </Button>
            </span>
          </div>
        ) : (
          <span className="empty-order">????n h??ng ??ang tr???ng</span>
        )}
      </Container>
    </div>
  );
};

export default ImageHOC(MyCart);
