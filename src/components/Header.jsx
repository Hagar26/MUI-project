import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Avatar,
    Stack,
} from "@mui/material";
import { Link } from "react-router";

const Header = () => {
    return (
        <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" fontWeight="bold">
            My Store
            </Typography>

            <Stack direction="row" spacing={2} >
            
            <Button color="inherit" component={Link} to="/">
                Home
            </Button>

            <Button color="inherit" variant="outlined" component={Link} to="/register">
                Register
            </Button>

            <Avatar src="user.jpg" />
            </Stack>
        </Toolbar>
        </AppBar>
    );
};

export default Header;