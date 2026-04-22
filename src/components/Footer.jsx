import { Typography } from "@mui/material";
import {styled} from "@mui/system";
const FooterStyled=styled("div")({color:"white" , backgroundColor:"#1976d2" , fontSize:40,textAlign: "center",padding: "16px",mt: "auto"})
const Footer = () => {
    return (
        <FooterStyled
        >
            <Typography>© 2026 My Store. All rights reserved.</Typography>
        </FooterStyled>
    );
};

export default Footer;