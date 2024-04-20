import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "reactstrap";
import FormField from "../components/FormField";
import { useAppContext } from "../contexts/AppContainer.context";

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

         <Button type="submit">{editInfoData ? "Update" : "Add new"}</Button>
      </Form>
   );
};

export default FormContainer;
