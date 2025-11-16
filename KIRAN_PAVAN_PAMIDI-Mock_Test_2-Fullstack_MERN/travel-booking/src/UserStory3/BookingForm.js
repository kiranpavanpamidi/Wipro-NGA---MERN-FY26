import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const BookingForm = () => {
  const formik = useFormik({
    initialValues: { name: '', email: '', destination: '' },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid Email').required('Required'),
      destination: Yup.string().required('Required')
    }),
    onSubmit: values => {
      alert(`Booking Confirmed for ${values.name}`);
    }
  });

  return (
    <div className="container p-4">
      <h3>Book Your Trip</h3>
      <form onSubmit={formik.handleSubmit} className="p-3 border rounded">
        <input name="name" placeholder="Name"
          onChange={formik.handleChange} value={formik.values.name}
          className="form-control mb-2" />
        {formik.touched.name && formik.errors.name && <div className="text-danger">{formik.errors.name}</div>}

        <input name="email" placeholder="Email"
          onChange={formik.handleChange} value={formik.values.email}
          className="form-control mb-2" />
        {formik.touched.email && formik.errors.email && <div className="text-danger">{formik.errors.email}</div>}

        <input name="destination" placeholder="Destination"
          onChange={formik.handleChange} value={formik.values.destination}
          className="form-control mb-2" />
        {formik.touched.destination && formik.errors.destination && <div className="text-danger">{formik.errors.destination}</div>}

        <button type="submit" className="btn btn-success w-100 mt-2">Book Now</button>
      </form>
    </div>
  );
};

export default BookingForm;
