import { useFormik } from "formik";
import React from "react";
import { Button, Input, Label } from "reactstrap";
import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const FormFormikContainer = () => {
   const formik = useFormik({
      initialValues: {
         email: "",
         password: "",
         confirmPassword: "",
         phone: "",
      },
      validationSchema: Yup.object({
         email: Yup.string()
            .min(5, "Vui lofng nhap du 5 ky tu")
            .max(15, "Must be 15 characters or less")
            .required("Required"),
         password: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
         confirmPassword: Yup.string().oneOf(
            [Yup.ref("password")],
            "Confirm Password must be the same as the password"
         ),
         phone: Yup.string().matches(phoneRegExp, "Vui long nhap dung format")
      }),
      onSubmit: (values) => {
         console.log("🚀 ~ FormFormikContainer ~ values:", values);
         //  console.log(JSON.stringify(values, null, 2));
      },
   });

   return (
      <form onSubmit={formik.handleSubmit}>
         <Label for="examplePhoneNumber">PhoneNumber</Label>
         <Input
            id="examplePhoneNumber"
            placeholder="with a placeholder"
            {...formik.getFieldProps("phone")}
         />
         {formik.touched.phone && formik.errors.phone ? (
            <div style={{ color: "red" }}>{formik.errors.phone}</div>
         ) : null}

         <Label for="exampleEmail">Email</Label>
         <Input
            id="exampleEmail"
            placeholder="with a placeholder"
            {...formik.getFieldProps("email")}
         />
         {formik.touched.email && formik.errors.email ? (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
         ) : null}

         <Label for="examplePassword">Password</Label>

         <Input
            id="examplePassword"
            name="password"
            placeholder="Enter your password"
            type="password"
            {...formik.getFieldProps("password")}
         />
         {formik.touched.password && formik.errors.password && (
            <p style={{ color: "red" }}>{formik.errors.password}</p>
         )}

         <Label for="confirmPassword">Confirm Password</Label>

         <Input
            id="confirmPassword"
            placeholder="Enter your password"
            type="password"
            {...formik.getFieldProps("confirmPassword")}
         />
         {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <p style={{ color: "red" }}>{formik.errors.confirmPassword}</p>
         )}

         <Button type="submit">Submit</Button>
      </form>
   );
};

export default FormFormikContainer;
