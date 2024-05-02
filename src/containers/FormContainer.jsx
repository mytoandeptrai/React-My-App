import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "reactstrap";
import FormField from "../components/FormField";
import { useAppContext } from "../contexts/AppContainer.context";
import axios from "axios";
import { axiosClient } from "../axiosClient";
import FileBase64 from "react-file-base64";

const FormContainer = () => {
   const appContext = useAppContext();
   const { onSubmitData, onUpdateData, editInfoData } = appContext;

   const [formValues, setFormValues] = useState({
      emailValue: "",
      passwordValue: "",
      addressValue: "",
      phoneNumber: "",
   });

   const onFormChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setFormValues({
         ...formValues,
         [name]: value,
      });
   };

   useEffect(() => {
      if (editInfoData) {
         const { email, phoneNumber, password, address } = editInfoData;
         setFormValues((previousState) => {
            return {
               ...previousState,
               emailValue: email,
               phoneNumber: phoneNumber,
               passwordValue: password,
               addressValue: address,
            };
         });
      } else {
         setFormValues(() => {
            return {
               emailValue: "",
               phoneNumber: "",
               passwordValue: "",
               addressValue: "",
            };
         });
      }
   }, [editInfoData]);

   const onSubmit = (e) => {
      e.preventDefault();

      if (isNaN(formValues.phoneNumber)) {
         alert("Please enter a valid phone number");
         return;
      }

      const object = {
         id: Math.random(),
         email: formValues.emailValue,
         password: formValues.passwordValue,
         address: formValues.addressValue,
         phoneNumber: formValues.phoneNumber,
      };

      onSubmitData(object);
   };

   const onUpdate = (e) => {
      e.preventDefault();

      if (isNaN(formValues.phoneNumber)) {
         alert("Please enter a valid phone number");
         return;
      }

      const object = {
         id: editInfoData?.id,
         email: formValues.emailValue,
         password: formValues.passwordValue,
         address: formValues.addressValue,
         phoneNumber: formValues.phoneNumber,
      };

      onUpdateData(object);
   };

   const [fileImage, setFileImage] = useState("");

   const onPostClick = async () => {
      try {
         const data = {
            id: Math.random(),
            name: "product2",
            size: "XL",
            image: fileImage,
         };

         const response = await axios.post(
            "http://localhost:5000/products",
            data
         );
      } catch (error) {}
   };

   const onGetClick = async () => {
      try {
         const response = await axiosClient.get("/products");
         console.log("🚀 ~ response2", response);
      } catch (error) {
         console.log("🚀 ~ onGetClick ~ error:", error);
      }
   };
   const onPutClick = async (id) => {
      try {
         const data = {
            id: id,
            email: `thinh1234.${Math.random()}@gmail.com`,
            name: `thinh${Math.random()}`,
         };

         const response = await axios.put(
            `http://localhost:5000/users/${id}`,
            data
         );
      } catch (error) {
         console.log("🚀 ~ onPutClick ~ error:", error);
      }
   };
   const onPatchClick = async () => {};
   const onDeleteClick = async (id) => {
      try {
         const response = await axiosClient.delete(`/users/${id}`);
      } catch (error) {
         console.log("🚀 ~ onDeleteClick ~ error:", error);
      }
   };

   return (
      <Form onSubmit={editInfoData ? onUpdate : onSubmit}>
         <Row>
            <Col md={6}>
               <FormField
                  name="emailValue"
                  placeholder="Email placeholder"
                  label="Email"
                  type="email"
                  value={formValues.emailValue}
                  onChange={onFormChange}
               />
            </Col>
            <Col md={6}>
               <FormField
                  name="passwordValue"
                  placeholder="Password placeholder"
                  label="Password"
                  type="password"
                  value={formValues.passwordValue}
                  onChange={onFormChange}
               />
            </Col>
         </Row>
         <FormField
            name="addressValue"
            placeholder="Address placeholder"
            label="Address"
            type="text"
            value={formValues.addressValue}
            onChange={onFormChange}
         />
         <FormField
            name="phoneNumber"
            placeholder="PhoneNumber placeholder"
            label="Phone Number"
            type="text"
            value={formValues.phoneNumber}
            onChange={onFormChange}
         />

         {/* <Button type="submit">{editInfoData ? "Update" : "Add new"}</Button> */}
         <Button
            type="button"
            style={{ marginLeft: "10px" }}
            onClick={onGetClick}
         >
            Test GET Axios
         </Button>
         <Button
            type="button"
            style={{ marginLeft: "10px" }}
            onClick={onPostClick}
         >
            Test POST Axios
         </Button>
         <Button
            type="button"
            style={{ marginLeft: "10px" }}
            onClick={() => onPutClick("0.2163967940025393")}
         >
            Test PUT Axios
         </Button>
         <Button
            type="button"
            style={{ marginLeft: "10px" }}
            onClick={onPatchClick}
         >
            Test PATCH Axios
         </Button>
         <Button
            type="button"
            style={{ marginLeft: "10px" }}
            onClick={() => onDeleteClick("0.7467165807198004")}
         >
            Test DELETE Axios
         </Button>

         <FileBase64
            accept="image/*"
            multiple={false}
            type="file"
            value={fileImage}
            onDone={({ base64 }) => {
               setFileImage(base64);
            }}
         />
      </Form>
   );
};

export default FormContainer;
