import * as React from 'react';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import {useNavigate} from "react-router-dom";
import {useFormik} from "formik";
import {AccountCircle} from "@mui/icons-material";
import InputAdornment from "@mui/material/InputAdornment";

export default function Register() {

    const navigate = useNavigate();

    const validate = values => {
        const errors = {}
        if (!values.email) {
            errors.email = 'Email Filed is Required'
        } else if (values.email.length < 9) {
            errors.email = 'Email Must Be 9 characters or/ more'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid Email'
        }
        if (!values.password) {
            errors.password = 'Password Field is Required'
        } else if (values.password.length < 6) {
            errors.password = 'Password Must Be 6 characters or/ more'
        }
        if (!values.repassword) {
            errors.repassword = 'Password Field is Required'
        } else if (values.repassword.length < 6) {
            errors.repassword = 'Password Must Be 6 characters or/ more'
        }else if (values.repassword !== values.password){
            errors.repassword = "Passwords Mismatch"
        }
        if (!values.first_name){
            errors.first_name = "First Name Field is Required"
        }else if (values.first_name.length < 3){
            errors.first_name = "First Name Must Be 3 Characters or/ More"
        }
        if (!values.last_name){
            errors.last_name = "First Name Field is Required"
        }else if (values.last_name.length < 3){
            errors.last_name = "First Name Must Be 3 Characters or/ More"
        }
        if (!values.phone){
            errors.phone = "Phone Field is Required"
        }
        return errors;
    };
    const formik = useFormik({
        initialValues: {
            first_name:'',
            last_name:'',
            email: '',
            phone: '',
            password: '',
            repassword: ''
        },
        validate
    });
    return (

            <Box sx={{ '& > :not(style)': { m: 1 },   textAlign: 'center',
                marginTop: '90px' }}>
                <div>
                    <TextField
                        style={{margin: '20px', width:'400px'}}
                        error={formik.touched.first_name && formik.errors.first_name ? true : null}
                        onChange={formik.handleChange}
                        value={formik.values.first_name}
                        onBlur={formik.handleBlur}
                        helperText={formik.touched.first_name && formik.errors.first_name ? formik.errors.first_name : null}
                        id="first_name"
                        name='first_name'
                        type='text'
                        label="First Name"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                        variant="standard"
                    />
                    <TextField
                        style={{margin: '20px', width:'400px'}}
                        error={formik.touched.last_name && formik.errors.last_name ? true : null}
                        onChange={formik.handleChange}
                        value={formik.values.last_name}
                        onBlur={formik.handleBlur}
                        helperText={formik.touched.last_name && formik.errors.last_name ? formik.errors.last_name : null}
                        id="last_name"
                        label="Last Name"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                        variant="standard"
                    />
                </div>
                <div>
                    <TextField
                        style={{margin: '20px', width:'400px'}}
                        error={formik.touched.email && formik.errors.email ? true : null}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                        helperText={formik.touched.email && formik.errors.email ? formik.errors.email : null}
                        id="email"
                        label="Email"
                        type="text"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                        variant="standard"
                    />
                    <TextField
                        style={{margin: '20px', width:'400px'}}
                        error={formik.touched.phone && formik.errors.phone ? true : null}
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                        onBlur={formik.handleBlur}
                        helperText={formik.touched.phone && formik.errors.phone ? formik.errors.phone : null}
                        id="phone"
                        label="Phone"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                        variant="standard"
                    />
                </div>
                <div>
                    <TextField
                        style={{margin: '20px', width:'400px'}}
                        error={formik.touched.password && formik.errors.password ? true : null}
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        onBlur={formik.handleBlur}
                        helperText={formik.touched.password && formik.errors.password ? formik.errors.password : null}
                        id="password"
                        label="Password"
                        type="password"
                        name="password"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                        variant="standard"
                    />
                    <TextField
                        style={{margin: '20px', width:'400px'}}
                        error={formik.touched.repassword && formik.errors.repassword ? true : null}
                        onChange={formik.handleChange}
                        value={formik.values.repassword}
                        onBlur={formik.handleBlur}
                        helperText={formik.touched.repassword && formik.errors.repassword ? formik.errors.repassword : null}
                        id="repassword"
                        name="repassword"
                        label="Password"
                        type="password"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                        variant="standard"
                    />
                </div>
                <Button
                    disabled={(formik.errors.email || formik.errors.password || formik.values.email === '' ||
                        formik.values.password === '' || formik.values.first_name === '' || formik.errors.first_name ||
                        formik.values.last_name === '' || formik.errors.last_name || formik.values.phone === '' ||
                        formik.errors.phone || formik.values.repassword === '' || formik.errors.repassword) ? true : null}
                    variant="contained"
                    color="success"
                    onClick={() => {
                        console.log(JSON.stringify(formik.values, null, 2))
                    }}>
                    Save
                </Button>
            </Box>

    );
}
