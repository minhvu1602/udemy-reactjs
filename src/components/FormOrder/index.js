import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import ClearIcon from "@mui/icons-material/Clear";
import CircularProgress from "@mui/material/CircularProgress";
import { removeCart } from "../../redux/action/cartAction";
import { useDispatch } from "react-redux";
import {
  postOder,
  openedDialogUpdate,
  updateOrder,
} from "../../redux/action/order";
import ImageHOC from "../ImageHOC";

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

  const sendOrder = async () => {
    setLoading(true);
    if (id) {
      dispatch(updateOrder({ id, name, address, phone }));
      window.location.reload();
    } else {
      await dispatch(postOder({ name, address, total, phone, items }));
    }
    dispatch(removeCart());
    closeForm();
    alert(
      id
        ? "Cập nhật thông tin thành công"
        : "Đặt hàng thành công, vui lòng chờ admin duyệt đơn và phản hồi lại tới bạn."
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
                Loại sản phẩm
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
                    label="Họ và tên"
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
                    label="Địa chỉ"
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
                    label="Giá tiền cần thanh toán"
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    value={phone}
                    label="SĐT"
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
                  {id ? "Cập nhật" : "Đặt hàng"}
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
