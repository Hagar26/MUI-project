import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid'; 
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';

export default function About() {
    return (
        <Box sx={{ flexGrow: 1, p: 4 }}>
            <Grid container spacing={4} alignItems="flex-start">
                
                <Grid item xs={12} md={6}>
                    <CardMedia
                        component="img"
                        height="400"
                        image={"laptop.jpg"}
                        alt="Laptop"
                        sx={{ borderRadius: '12px', boxShadow: 3 }}
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <Accordion defaultExpanded> 
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">Why Choose Us?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">Our Mission</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                We aim to provide the best solutions for our customers.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>

            </Grid>
        </Box>
    );
}