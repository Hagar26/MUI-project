import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography, Stack ,Button, Checkbox, MenuItem} from '@mui/material';
const Register = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        age: "",
        gender: "",
        country:"",
        skills: [],
        agree: false,
    });

    const skills=["html" ,"css" ,"Js", "React" ,"Angular" ,"NodeJs"];

    const handleChange = (e) => {
        setFormData({...formData,[e.target.name]: e.target.value,});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <>
        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center",minHeight: "100vh", backgroundColor: "white",}}>
            <Box component="form" onSubmit={handleSubmit} sx={{width: 400, p: 4, borderRadius: 3, boxShadow: 3, margin:"50px auto "}}>
                <Stack spacing={3}>
                    <Typography variant="h4" color="primary" sx={{ textAlign: "center" }} fontWeight="bold">
                        Register
                    </Typography>

                    <TextField label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} fullWidth/>

                    <TextField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} fullWidth />

                    <TextField label="Password" name="password" type="password" value={formData.password} onChange={handleChange} fullWidth/>

                    <TextField label="Age" name="age" type="number" value={formData.age} onChange={handleChange} fullWidth/>
                    
                    <TextField value={formData.country} name="country" onChange={handleChange} select label="select Country" sx={{width:400}} >
                        <MenuItem value="Egypt">Egypt</MenuItem>
                        <MenuItem value="Paris">Paris</MenuItem>
                        <MenuItem value="London">London</MenuItem>
                    </TextField>

                    <Autocomplete
                        multiple
                        options={skills}
                        value={formData.skills}
                        onChange={(e, value) =>
                        setFormData({ ...formData, skills: value })
                        }
                        renderInput={(params) => (
                        <TextField {...params} label="Skills" />
                        )}
                    />

                    <FormControl>
                        <FormLabel>Gender</FormLabel>
                        <RadioGroup
                        row
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>

                    <FormControlLabel
                        control={<Checkbox name="agree" checked={formData.agree} onChange={(e,x)=>setFormData({...formData,agree:x})}/>}
                        label="I agree to terms"
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        size="large"
                        sx={{
                        fontSize: "16px",
                        borderRadius: 2,
                        }}
                    >
                        Register
                    </Button>
                </Stack>
            </Box>
        </Box>
        </>
    )
}

export default Register