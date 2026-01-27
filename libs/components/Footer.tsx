import { Box, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <>
      <Stack className="main">
        <Stack className="left">
          <Box className="footer-box">
            <img src="/img/logo/logoWhite.svg" alt="" className="logo" />
          </Box>
          <Box className="footer-box">
            <span>total free customer care</span>
            <p>+82 10 1234 5678</p>
          </Box>
          <Box className="footer-box">
            <span>Nee Live</span>
            <p>+82 10 1234 5678</p>
            <span>Support?</span>
          </Box>
          <Box className="footer-box">
            <p>follow us on social media</p>
            <div className="media-box">
              <FacebookIcon />
              <TwitterIcon />
              <InstagramIcon />
              <LinkedInIcon />
            </div>
          </Box>
        </Stack>
        <Stack className="right">
          <Box className="top">
            <strong>keep yourself up to date </strong>
            <div>
              <input type="text" placeholder="your email" />
              <span>Subscribe</span>
            </div>
          </Box>
          <Box className="bottom">
            <div>
              <strong>Popular search</strong>
              <span>Property for rent</span>
              <span>Property low to hide</span>
            </div>
            <div>
              <strong>Quick links</strong>
              <span>Terms of use</span>
              <span>Privacy Policy</span>
              <span>Pricing Plans</span>
              <span>Our services</span>
              <span>Contact support</span>
              <span>FAQs</span>
            </div>
            <div>
              <strong>Discover</strong>
              <span>Seoul</span>
              <span>Gyeongido</span>
              <span>Busan</span>
              <span>Jejudo</span>
            </div>
          </Box>
        </Stack>
      </Stack>
      <Stack className="second">
        <span>
        © Nestar - All rights reserved. Nestar 2024
        </span>
        <span>Privacy · Terms · Sitemap</span>
      </Stack>
    </>
  );
};

export default Footer;
