import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import ClearIcon from "@mui/icons-material/Clear";
import CircularProgress from "@mui/material/CircularProgress";
import { removeCart } from "../redux/action/cartAction";
import { useDispatch } from "react-redux";
import {
  postOder,
  openedDialogUpdate,
  updateOrder,
} from "../redux/action/orderAction";
import ImageHOC from "./ImageHOC/imageHOC";

const FormNewOrder = ({
  setNewFormOrder,
  total,
  items,
  id,
  totalFromOrderList,
}) => {
  const [addOrder, setAddOrder] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const hideLoading = async () => {
      setLoading(false);
    };
    hideLoading();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAddOrder(addOrder);
  };

  const closeForm = async () => {
    if (id) {
      dispatch(openedDialogUpdate({ isOpenDialogUpdate: false }));
      return;
    }
    setNewFormOrder(false, null);
  };

  const validation = () => {
    const regexPhone = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    let invalid = true;
    if (name.length === 0 || name.trim().length === 0) {
      invalid = false;
    }
    if (address.length === 0) {
      invalid = false;
    }
    if (!regexPhone.test(phone)) {
      invalid = false;
    }
    return invalid;
  };

  const sendOrder = async () => {
    if (!validation()) return;
    setLoading(true);
    if (id) {
      dispatch(updateOrder({ id, name, address, phone }));
      // window.location.reload();
    } else {
      await dispatch(postOder({ name, address, total, phone, items }));
    }
    dispatch(removeCart());
    closeForm();
    alert(
      id
        ? "C???p nh???t th??ng tin th??nh c??ng"
        : "?????t h??ng th??nh c??ng, vui l??ng ch??? admin duy???t ????n v?? ph???n h???i l???i t???i b???n."
    );
    setLoading(false);
  };

  return (
    <div className="form-newOrder">
      {!loading ? (
        <div>
          <div onClick={() => closeForm()} className="icon-newOrder">
            <ClearIcon />
          </div>
          <Container maxWidth="lg">
            <Card>
              <Typography
                component="h1"
                variant="h5"
                className="title-newOrder"
              >
                Lo???i s???n ph???m
              </Typography>
              <Grid
                container
                spacing={2}
                className="card-newOrder"
                onSubmit={(event) => handleSubmit(event)}
              >
                <Grid item md={6}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    value={name}
                    label="H??? v?? t??n"
                    onChange={(event) => setName(event.target.value)}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    value={address}
                    label="?????a ch???"
                    onChange={(event) => setAddress(event.target.value)}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    value={id ? totalFromOrderList : total}
                    InputProps={{
                      readOnly: true,
                    }}
                    label="Gi?? ti???n c???n thanh to??n"
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    value={phone}
                    label="S??T"
                    onChange={(event) => setPhone(event.target.value)}
                  />
                </Grid>
              </Grid>
              <div className="button-newOrder">
                <Button
                  variant="outlined"
                  type="submit"
                  onClick={() => sendOrder()}
                >
                  {id ? "C???p nh???t" : "?????t h??ng"}
                </Button>
              </div>
            </Card>
          </Container>
        </div>
      ) : (
        <CircularProgress size={50} />
      )}
    </div>
  );
};

export default ImageHOC(FormNewOrder);
