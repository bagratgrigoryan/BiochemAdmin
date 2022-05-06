import * as React from 'react';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import Header from "../components/Header";
import {useNavigate} from "react-router-dom";
import {useFormik} from "formik";

export default function Login() {

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
        return errors;
    };
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate
    });
    return (
        <>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': {m: 1, width: '25ch'},
                    textAlign: 'center',
                    marginTop: '90px'
                }}
                noValidate
                autoComplete="off"
                onSubmit={formik.handleSubmit}
            >
                <div>
                    <TextField
                        style={{
                            width: "300px"
                        }}
                        error={formik.touched.email && formik.errors.email ? true : null}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                        id="email"
                        label='Email'
                        helperText={formik.touched.email && formik.errors.email ? formik.errors.email : null}
                        type='text'
                        name="email"                        required='true'
                    />
                </div>
                <div>
                    <TextField
                        style={{
                            width: '300px'
                        }}
                        error={formik.touched.password && formik.errors.password ? true : null}
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        onBlur={formik.handleBlur}
                        helperText={formik.touched.password && formik.errors.password ? formik.errors.password : null}
                        id="password"
                        label="Password"
                        type="password"
                        name="password"
                        required='true'
                    />
                </div>
                <div style={{
                    marginTop: "20px",
                    marginLeft: '70px'
                }}>
                    <Button color="secondary" onClick={()=> navigate('/forget')}>Forgot password?</Button>
                    <Button
                        disabled={(formik.errors.email || formik.errors.password || formik.values.email === '' ||
                        formik.values.password === '') ? true : null}
                        variant="contained"
                        color="success"
                        onClick={() => {
                            console.log(JSON.stringify(formik.values, null, 2))
                        }}>
                        LogIn
                    </Button>
                </div>
            </Box>
        </>
    );
}
