import Container from "@material-ui/core/Container";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import { removeOrder, openedDialogUpdate } from "../redux/action/orderAction";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { getListOrder } from "../redux/action/orderAction";
import NewOrder from "./FormOrder.js";

const ListOrders = () => {
  const [loading, setLoading] = useState(false);
  const [idDelete, setIdDelete] = useState();
  const [idOrder, setIdOrder] = useState();
  const [total, setTotal] = useState();
  const listOrder = useSelector((state) => state.order.listOrder);
  const isOpenDialogUpdate = useSelector(
    (state) => state.order.isOpenDialogUpdate
  );
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
    // eslint-disable-next-line
  }, []);

  const handleUpdate = (_id, _total) => {
    dispatch(openedDialogUpdate({ isOpenDialogUpdate: true }));
    setIdOrder(_id);
    setTotal(_total);
  };

  return (
    <div className="list-order-wrap">
      {isOpenDialogUpdate && (
        <NewOrder id={idOrder} totalFromOrderList={total} />
      )}
      <Container maxWidth="lg">
        <h1>Th??ng tin ????n h??ng</h1>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>T??n kh??ch h??ng</TableCell>
              <TableCell>?????a ch???</TableCell>
              <TableCell>SDT</TableCell>
              <TableCell>????n gi??</TableCell>
              <TableCell>H??nh ?????ng</TableCell>
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
                  <TableCell>
                    <Button
                      variant="outline"
                      onClick={() => handleUpdate(data.id, data.total)}
                    >
                      S???a
                    </Button>
                  </TableCell>
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
          <DialogContent>
            <DialogContentText>
              B???n c?? ch???c ch???n mu???n xo?? ????n h??ng n??y!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={deleteOrder}>
              ?????ng ??
            </Button>
            <Button onClick={handleClose} autoFocus>
              Hu???
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </div>
  );
};
export default ListOrders;
