import * as React from 'react';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import {useNavigate} from "react-router-dom";
import {useFormik} from "formik";

export default function Forget() {

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
        return errors;
    };
    const formik = useFormik({
        initialValues: {
            email: ''
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
                            width: "400px"
                        }}
                        error={formik.touched.email && formik.errors.email ? true : null}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                        id="email"
                        label='Email'
                        helperText={formik.touched.email && formik.errors.email ? formik.errors.email : null}
                        type='text'
                        name="email"
                        required='true'
                    />
                </div>
                <Button
                    style={{
                        marginLeft:"330px"
                    }}
                    disabled={(formik.errors.email || formik.values.email === '') ? true : null}
                    variant="contained"
                    color="success"
                    onClick={() => {
                        console.log(JSON.stringify(formik.values, null, 2))
                    }}>
                    Send
                </Button>
            </Box>
        </>
    );
}
