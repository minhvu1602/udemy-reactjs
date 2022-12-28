import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Footer = () => {
  return (
    <div className="footer-wrapper" id="contact">
      <Container maxWidth="xl" className="contact-wrapper">
        <div className="ptbx4">
          <span className="h3 fw600 green">Thông tin liên hệ</span>
          <Grid container spacing={2} className="ptx3">
            <Grid item md={3}>
              <span className="h2 fw600 white">Địa chỉ:</span>
              <h1 className="h2 fw400 white">
                {" "}
                số 2 An Dương Vương, quận Tây Hồ, Hà Nội
              </h1>
            </Grid>
            <Grid item md={3}>
              <span className="h2 fw600 white">Email:</span>
              <h1 className="h2 fw400 white">minhvq52@wru.vn</h1>
            </Grid>
            <Grid item md={3}>
              <span className="h2 fw600 white">Số điện thoại:</span>
              <h1 className="h2 fw400 white">037 729 7497</h1>
            </Grid>
            <Grid item md={3}>
              <span className="white h2 fw600">Social media:</span>
              <div className="ptx1">
                <span className="white icon-footer">
                  <FacebookIcon fontSize="large" />
                </span>
                <span className="white icon-footer">
                  <InstagramIcon fontSize="large" />
                </span>
                <span className="white icon-footer">
                  <YouTubeIcon fontSize="large" />
                </span>
                <span className="white icon-footer">
                  <PinterestIcon fontSize="large" />
                </span>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};
export default Footer;
