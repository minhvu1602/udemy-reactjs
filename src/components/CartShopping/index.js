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
} from "../../redux/action/cartAction";
import "./Cart.scss";
// import { getOrder, deleteOrder } from "../../services/order/index";
import NewOrder from "../FormOrder/index";
// import { useHistory } from "react-router";
// import FormEditOrder from "../components/FormEdidOrder";

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

const Mycart = () => {
  const addedProducts = useSelector((state) => state.itemsInCart.itemsInCart);
  //   const userLogon = useSelector((state) => state.user.dataUser);
  const dispatch = useDispatch();
  //   const [products, setProducts] = useState([]);
  //   const [newOrder, setNewOrder] = useState();
  //   const [showEditFormOrder, setShowEditFormOder] = useState(false);
  const [showNewFormOrder, setShowNewFormOrder] = useState(false);
  //   const [idOrder, setIdOrder] = useState();
  //   const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState();
  //   const history = useHistory();

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    const countTotal = async () => {
      await setTotal(calculatePrice());
    };
    countTotal();
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
    console.log("found", found);
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
      addedProducts.map((data) => {
        arr.push(data.price * data.quantityorder);
      });
      return arr.reduce(reducer);
    }
  };

  //   useEffect(async () => {
  //     // await newCat('minhtes00099', 125);
  //     //  await deleteCat('60812e7e2d92c3c223050041');
  //     //  await updateCat('609165c2dc8d3fa324c4f64e', 'minhupdate97', 112);
  //     // Update the document title using the browser API
  //     loadData();
  //   }, []);

  //   const setShowFormEditOrderById = (status, id) => {
  //     setShowEditFormOder(status);
  //     setIdOrder(id);
  //   };

  const setNewFormOrder = (status) => {
    setShowNewFormOrder(status);
  };

  //   const loadData = async () => {
  //     const newOrder = await getOrder();
  //     setNewOrder(newOrder);
  //     setLoading(false);
  //   };
  //   const deleteItem = async (id) => {
  //     debugger;
  //     setLoading(true);
  //     await deleteOrder(id);
  //     await loadData();
  //     setLoading(false);
  //   };

  return (
    <div className="cart">
      {/* {showEditFormOrder ? <FormEditOrder id={idOrder} setShowFormEditOrderById={setShowFormEditOrderById} loadData={loadData} /> : null}  */}
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
            <span className="h4 fw600">Bạn đã order:</span>
            <Grid container spacing={2} className="ptbx3">
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
                              <span>Giá tiền: {card.price}$</span>
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
                  <span className="h5 fw600 plx2">Hoá đơn</span>
                  <Grid container spacing={1} className="ptbx3">
                    <Grid item md={3}>
                      <Typography className="plx2">Tổng tiền:</Typography>
                    </Grid>
                    <Grid item md={2}>
                      <span>{calculatePrice()}$</span>
                    </Grid>
                  </Grid>
                  <Button
                    className="primary"
                    onClick={() => setNewFormOrder(true)}
                  >
                    Gửi đơn hàng
                  </Button>
                </Card>
              </Grid>
            </Grid>
            <span>
              <Button
                onClick={() => dispatch(removeCart())}
                className="primary"
              >
                Xoá hết
              </Button>
            </span>
          </div>
        ) : (
          <span className="empty-order">Đơn hàng đang trống</span>
        )}
      </Container>
    </div>
  );
};

export default Mycart;
