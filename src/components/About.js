import Grid from "@mui/material/Grid";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ReceiptIcon from "@mui/icons-material/Receipt";
import SdStorageIcon from "@mui/icons-material/SdStorage";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PetsIcon from "@mui/icons-material/Pets";

const About = () => {
  return (
    <div className="container">
      <Grid container spacing={2} className="white help-bg no-margin">
        <Grid item md={6}>
          <Grid container spacing={1}>
            <Grid item md={1}>
              <LocalShippingIcon fontSize="large" />
            </Grid>
            <Grid item md={11} className="title-wrap">
              <span className="h4 fw600">Hỗ Trợ 100% Chi Phí Vận Chuyển</span>
              <p>
                Miễn phí 100% chi phí vận chuyển chặng 1 trên toàn quốc, chịu
                mọi trách nhiệm trong quá trình vận chuyển
              </p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={6}>
          <Grid container spacing={1}>
            <Grid item md={1}>
              <ReceiptIcon fontSize="large" />
            </Grid>
            <Grid item md={11}>
              <span className="h4 fw600">Voucher Giảm Đến 20% Trọn Đời</span>
              <p>
                Ưu Đãi 10% khi mua Phụ Kiện, 20% khi sử dụng Dịch Vụ Spa
                Grooming.
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2} className="white help-bg">
        <Grid item md={6}>
          <Grid container spacing={1}>
            <Grid item md={1}>
              <SdStorageIcon fontSize="large" />
            </Grid>
            <Grid item md={11}>
              <span className="h4 fw600">Full Giấy Tờ Microchip</span>
              <p>
                Tất cả thú cưng trước khi xuất bán đều được tiêm phòng, tẩy giun
                đầy đủ, có sổ khám bệnh chi tiết, Microchip theo dõi
              </p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={6}>
          <Grid container spacing={1}>
            <Grid item md={1}>
              <PetsIcon fontSize="large" />
            </Grid>
            <Grid item md={11}>
              <span className="h4 fw600">Thu Mua Lại Chó Con</span>
              <p>
                Hỗ trợ chi phí phối giống, hướng dẫn chăm sóc theo chuẩn quy
                trình + thu mua lại đàn con với giá thành cao.
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2} className="white help-bg">
        <Grid item md={6}>
          <Grid container spacing={1}>
            <Grid item md={1}>
              <LocalHospitalIcon fontSize="large" />
            </Grid>
            <Grid item md={11}>
              <span className="h4 fw600">Hỗ Trợ Chăm Sóc Trọn Đời</span>
              <p>
                Hỗ trợ chi phí khám chữa bệnh, tư vấn chăm sóc sức khỏe trọn
                đời. Hỗ trợ bác sỹ khám chữa bệnh tại nhà với khách hàng khu vực
                tại Hà Nội và TPHCM
              </p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={6}>
          <Grid container spacing={1}>
            <Grid item md={1}>
              <AccountBalanceIcon fontSize="large" />
            </Grid>
            <Grid item md={11}>
              <span className="h4 fw600">Thanh Toán Trước 30%</span>
              <p>
                Khách hàng chỉ cần đặt cọc trước 30% giá trị thú cưng, số tiền
                còn lại thanh toán khi nhận bé.
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default About;
