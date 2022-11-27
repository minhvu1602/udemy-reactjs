import Container from "@material-ui/core/Container";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
// import Title from "./Title";
// import Button from "@material-ui/core/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import { removeOrder } from "../../redux/action/order";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { getListOrder } from "../../redux/action/order";

const FomrOrder = () => {
  const [newOrder, setNewOrder] = useState();
  const [showEditFormOrder, setShowEditFormOder] = useState(false);
  const [idOrder, setIdOrder] = useState();
  const [loading, setLoading] = useState(false);
  const [idDelete, setIdDelete] = useState();
  const listOrder = useSelector((state) => state.listOrder.listOrder);
  console.log("listOrder", listOrder);
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = (id) => {
    setOpen(true);
    setIdDelete(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteOrder = async () => {
    setLoading(true);
    dispatch(removeOrder(idDelete));
    await loadData();
    handleClose();
    setLoading(false);
  };

  const loadData = async () => {
    setLoading(true);
    await dispatch(getListOrder());
    setLoading(false);
  };

  useEffect(() => {
    loadData();
    console.log("dispatch");
  }, []);

  console.log("res", loading);
  //   const setShowFormEditOrderById = (status, id) => {
  //     setShowEditFormOder(status);
  //     setIdOrder(id);
  //   };

  return (
    <div>
      <Container maxWidth="lg">
        <h1>Thông tin đơn hàng</h1>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Tên khách hàng</TableCell>
              <TableCell>Địa chỉ</TableCell>
              <TableCell>SDT</TableCell>
              <TableCell>Đơn giá</TableCell>
              <TableCell>Hành động</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listOrder &&
              listOrder.map((data) => (
                <TableRow key={data.id}>
                  <TableCell>{data.name}</TableCell>
                  <TableCell>{data.address}</TableCell>
                  <TableCell>{data.phone}</TableCell>
                  <TableCell>{data.total}</TableCell>
                  {/* <TableCell align="right">
                    <Button
                      variant="outline"
                      onClick={() => setShowFormEditOrderById(true, data._id)}
                    >
                      Sửa
                    </Button>
                  </TableCell> */}
                  <TableCell>
                    <DeleteIcon onClick={() => handleClickOpen(data.id)} />
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        {loading && <CircularProgress size={50} />}
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {"Use Google's location service?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Disagree
            </Button>
            <Button onClick={deleteOrder} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </div>
  );
};
export default FomrOrder;
