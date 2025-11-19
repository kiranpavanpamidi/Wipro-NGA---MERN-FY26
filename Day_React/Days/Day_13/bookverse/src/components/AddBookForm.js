import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function AddBookForm({ onSubmit }) {
  return (
    <Formik
      initialValues={{ title: "", author: "", price: "" }}
      validationSchema={Yup.object({
        title: Yup.string().required("Title is required"),
        author: Yup.string().required("Author is required"),
        price: Yup.number().required("Price is required"),
      })}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      <Form className="card p-4 shadow-sm">
        <label>Book Title</label>
        <Field name="title" className="form-control" />
        <ErrorMessage name="title" className="text-danger" component="p" />

        <label className="mt-2">Author</label>
        <Field name="author" className="form-control" />
        <ErrorMessage name="author" className="text-danger" component="p" />

        <label className="mt-2">Price</label>
        <Field name="price" type="number" className="form-control" />
        <ErrorMessage name="price" className="text-danger" component="p" />

        <button type="submit" className="btn btn-success mt-3">
          Add Book
        </button>
      </Form>
    </Formik>
  );
}

export default AddBookForm;
