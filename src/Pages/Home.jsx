import { Box, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid"; 
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import About from "../components/about";

const products = [
    {
        id: 1,
        title: "Laptop",
        description: "High performance laptop",
        price: 1200,
        image: "laptop.jpg",
        rating: 4,
    },
    {
        id: 2,
        title: "Phone",
        description: "Latest smartphone",
        price: 800,
        image: "laptop.jpg",
        rating: 3.5,
    },
    {
        id: 3,
        title: "Headphones",
        description: "Noise cancelling",
        price: 200,
        image: "laptop.jpg",
        rating: 2.5,
    },
    {
        id: 4,
        title: "Keyboard",
        description: "Mechanical keyboard",
        price: 100,
        image: "laptop.jpg",
        rating: 5,
    },
    {
        id: 5,
        title: "Mouse",
        description: "Gaming mouse",
        price: 50,
        image: "laptop.jpg",
        rating: 4.5,
    },
    {
        id: 6,
        title: "Monitor",
        description: "4K monitor",
        price: 400,
        image: "laptop.jpg",
        rating: 3,
    },
];

const Home = () => {
    return (
    <>
    <Header/>
        <Box
            sx={{
            height: { xs: "50vh", md: "60vh" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "white",
            background: "#93d0ff",
            }}
        >
            <Typography variant="h3" fontWeight="bold">
                Welcome to My Store
            </Typography>

            <Typography mt={2}>
                Discover amazing products with the best prices
            </Typography>

            <Button
                variant="contained"
                size="large"
                sx={{
                    mt: 3,
                    backgroundColor: "white",
                    color: "#1976d2",
                    "&:hover": {
                    backgroundColor: "#e3f2fd",
                    },
                }}
            >
                Shop Now
            </Button>
        </Box>

        <Box sx={{ flexGrow: 1,m: 5}} >
            <Grid
            container
                spacing={{ xs: 2, md: 4 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
            >
            {products.map((product) => (
                <Grid
                key={product.id}
                size={{ xs: 4, sm: 4, md: 3 }}
                >
                <ProductCard {...product} />
                </Grid>
            ))}
            </Grid>
        </Box>
        {/* <About/> */}
        <Footer/>
        </>
    );
};

export default Home;