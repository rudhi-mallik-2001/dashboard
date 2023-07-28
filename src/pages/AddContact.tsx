import React from 'react'
import * as Yup from "yup";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import { Formik, Form, Field } from "formik";
import { useDispatch } from 'react-redux';
import { addContact } from '../Store/Slices/AddContactSlices';
import { useNavigate } from 'react-router-dom';

const style = {
   
    width: 'auto',
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };
const AddContact = () => {
    const dispatch = useDispatch();
    const SignupSchema = Yup.object().shape({
        pincode: Yup.string()
          .required("Required")
          .matches(/^[0-9]+$/, "Must be only digits")
          .min(6, "Must be exactly 6 digits")
          .max(6, "Must be exactly 6 digits")
        ,
        city: Yup.string()
          .min(2, "Too Short!")
          .max(50, "Too Long!")
          .required("Required"),
        state: Yup.string()
          .min(2, "Too Short!")
          .max(50, "Too Long!")
          .required("Required"),
        house: Yup.string()
          .min(10, "Too Short!")
          .max(100, "Too Long!")
          .required("Required"),
        area: Yup.string()
          .min(10, "Too Short!")
          .max(100, "Too Long!")
          .required("Required"),
        name: Yup.string()
          .min(2, "Too Short!")
          .max(50, "Too Long!")
          .required("Required"),
        phone: Yup.string()
          .matches(/^[6-9]\d{9}$/, {
            message: "Please enter valid number.",
            excludeEmptyString: false,
          })
          .min(10, "Too Short!")
          .max(10, "Too Long!")
          .required("Required"),
    
        email: Yup.string().email("Invalid email"),
      });

      const navigate = useNavigate();
      const saveAddress:Function=(values:any)=>{
        dispatch(addContact(values))
        navigate('/contacts')
      }
    return (
        <>
            <div className='w-auto md:w-[80%] ' >
                <Typography variant="h5" m={2} style={{ fontWeight: "bold" }}>
                    Address
                </Typography>
                <Formik
                     initialValues=
                    {{
                        pincode: Number,
                        city: String,
                        state: String,
                        house: String,
                        area: String,
                        name: String,
                        phone: Number,
                        email: String,
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={(values) => {
                        // same shape as initial values
                        console.log(values);
                        saveAddress(values);
                        
                    }}
                >
                    {({ errors, touched }) => (
                        <Form>
                           
                            <div className="flex flex-col md:flex-row items-center justify-between">
                                <div style={{ width: "100%", margin: "10px" }}>
                                    {errors.pincode && touched.pincode ? (
                                        <Field
                                            as={TextField}
                                            id="standard-multiline-flexible"
                                            label="Pincode"
                                            multiline
                                            maxRows={4}
                                            variant="standard"
                                            sx={{ m: 1, width: "100%" }}
                                            name="pincode"
                                            inputProps={{ maxLength: 6 }}
                                            error
                                        />
                                    ) : (
                                        <Field
                                            as={TextField}
                                            id="standard-multiline-flexible"
                                            label="Pincode"
                                            multiline
                                            maxRows={4}
                                            variant="standard"
                                            sx={{ m: 1, width: "100%" }}
                                            name="pincode"
                                            inputProps={{ maxLength: 6 }}
                                            color="success"
                                        />
                                    )}
                                    
                                </div>
                                <div style={{ width: "100%", margin: "10px" }}>
                                    {errors.city && touched.city ? (
                                        <Field
                                            as={TextField}
                                            id="standard-multiline-flexible"
                                            label="City"
                                            multiline
                                            maxRows={4}
                                            variant="standard"
                                            sx={{ m: 1, width: "100%" }}
                                            name="city"
                                            error
                                        />
                                    ) : (
                                        <Field
                                            as={TextField}
                                            id="standard-multiline-flexible"
                                            label="City"
                                            multiline
                                            maxRows={4}
                                            variant="standard"
                                            sx={{ m: 1, width: "100%" }}
                                            name="city"
                                            color="success"
                                        />
                                    )}
                                    
                                </div>
                                <div style={{ width: "100%", margin: "10px" }}>
                                    {errors.state && touched.state ? (
                                        <Field
                                            as={TextField}
                                            id="standard-multiline-flexible"
                                            label="State"
                                            multiline
                                            maxRows={4}
                                            variant="standard"
                                            sx={{ m: 1, width: "100%" }}
                                            name="state"
                                            error
                                        />
                                    ) : (
                                        <Field
                                            as={TextField}
                                            id="standard-multiline-flexible"
                                            label="State"
                                            multiline
                                            maxRows={4}
                                            variant="standard"
                                            sx={{ m: 1, width: "100%" }}
                                            name="state"
                                            color="success"
                                        />
                                    )}
                                    
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row items-center justify-between">
                                <div style={{ width: "100%", margin: "10px" }}>
                                    {errors.house && touched.house ? (
                                        <Field
                                            as={TextField}
                                            label="House/Flat/Office"
                                            id="standard-multiline-flexible"
                                            multiline
                                            maxRows={4}
                                            variant="standard"
                                            sx={{ m: 1, width: "100%" }}
                                            name="house"
                                            error
                                        />
                                    ) : (
                                        <Field
                                            as={TextField}
                                            label="House/Flat/Office"
                                            id="standard-multiline-flexible"
                                            multiline
                                            maxRows={4}
                                            variant="standard"
                                            sx={{ m: 1, width: "100%" }}
                                            name="house"
                                            color="success"
                                        />
                                    )}
                                   
                                </div>
                                <div style={{ width: "100%", margin: "10px" }}>
                                    {errors.area && touched.area ? (
                                        <Field
                                            as={TextField}
                                            label="Road Name/Area/Colony"
                                            id="standard-multiline-flexible"
                                            multiline
                                            maxRows={4}
                                            variant="standard"
                                            sx={{ m: 1, width: "100%" }}
                                            name="area"
                                            error
                                        />
                                    ) : (
                                        <Field
                                            as={TextField}
                                            label="Road Name/Area/Colony"
                                            id="standard-multiline-flexible"
                                            multiline
                                            maxRows={4}
                                            variant="standard"
                                            sx={{ m: 1, width: "100%" }}
                                            name="area"
                                            color="success"
                                        />
                                    )}
                                  
                                </div>
                            </div>
                            <Typography variant="h5" m={2} style={{ fontWeight: "bold" }}>
                                Contact
                            </Typography>
                            <div className="flex flex-col md:flex-row items-center justify-between">
                                <div style={{ width: "100%", margin: "10px" }}>
                                    {errors.name && touched.name ? (
                                        <Field
                                            as={TextField}
                                            label="Name"
                                            id="standard-multiline-flexible"
                                            multiline
                                            maxRows={4}
                                            variant="standard"
                                            sx={{ m: 1, width: "100%" }}
                                            name="name"
                                            error
                                        />
                                    ) : (
                                        <Field
                                            as={TextField}
                                            label="Name"
                                            id="standard-multiline-flexible"
                                            multiline
                                            maxRows={4}
                                            variant="standard"
                                            sx={{ m: 1, width: "100%" }}
                                            name="name"
                                            color="success"
                                        />
                                    )}
                                   
                                </div>
                                <div style={{ width: "100%", margin: "10px" }}>
                                    {errors.phone && touched.phone ? (
                                        <Field
                                            as={TextField}
                                            label="Phone"
                                            id="standard-multiline-flexible"
                                            multiline
                                            maxRows={4}
                                            variant="standard"
                                            sx={{ m: 1, width: "100%" }}
                                            name="phone"
                                            error
                                            inputProps={{ maxLength: 10 }}
                                        />
                                    ) : (
                                        <Field
                                            as={TextField}
                                            label="Phone"
                                            id="standard-multiline-flexible"
                                            multiline
                                            maxRows={4}
                                            variant="standard"
                                            sx={{ m: 1, width: "100%" }}
                                            name="phone"
                                            color="success"
                                            inputProps={{ maxLength: 10 }}
                                        />
                                    )}
                                  
                                </div>
                                <div style={{ width: "100%", margin: "10px" }}>
                                    {errors.email && touched.email ? (
                                        <Field
                                            as={TextField}
                                            label="Email"
                                            id="standard-multiline-flexible"
                                            multiline
                                            maxRows={4}
                                            variant="standard"
                                            sx={{ m: 1, width: "100%" }}
                                            name="email"
                                            error
                                        />
                                    ) : (
                                        <Field
                                            as={TextField}
                                            label="Email"
                                            id="standard-multiline-flexible"
                                            multiline
                                            maxRows={4}
                                            variant="standard"
                                            sx={{ m: 1, width: "100%" }}
                                            name="email"
                                            color="success"
                                        />
                                    )}
                                 
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row items-center justify-between">
                                <Button
                                    type="submit"
                                    variant="contained"
                                    
                                >
                                    Add
                                </Button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
}

export default AddContact