import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../App.css";
const EmployeeForm = () => {
  const [submittedData, setSubmittedData] = useState([]);

  const validationSchema = Yup.object({
    profilePicture: Yup.mixed()
      .required("Profile picture is required")
      .test(
        "fileSize",
        "File size too large",
        (value) => value && value.size <= 5242880
      )
      .test(
        "fileFormat",
        "Unsupported Format",
        (value) =>
          value && ["image/jpg", "image/jpeg", "image/png"].includes(value.type)
      ),
    employeeId: Yup.string().required("Employee ID is required"),
    employeeName: Yup.string().required("Employee Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    gender: Yup.string().required("Gender is required"),
    contactNo: Yup.string()
      .matches(/^\d{10}$/, "Contact number must be 10 digits")
      .required("Contact number is required"),
    role: Yup.string().required("Role is required"),
    dateOfJoining: Yup.date().required("Date of joining is required"),
    dateOfConfirmation: Yup.date().required("Date of confirmation is required"),
    dateOfBirth: Yup.date().required("Date of birth is required"),
    address: Yup.string().required("Address is required"),
    officeLocation: Yup.string().required("Office location is required"),
    designation: Yup.string().required("Designation is required"),
  });

  const formik = useFormik({
    initialValues: {
      profilePicture: null,
      employeeId: "",
      employeeName: "",
      email: "",
      gender: "",
      contactNo: "",
      role: "",
      dateOfJoining: "",
      dateOfConfirmation: "",
      dateOfBirth: "",
      address: "",
      officeLocation: "",
      designation: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      setSubmittedData([...submittedData, values]);
      console.log(submittedData);
      resetForm();
    },
  });

  return (
    <div>
      <h2>Employee Form</h2>
      <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
        <div>
          <label>Profile Picture (PNG/JPG, less than 5MB)</label>
          <input
            type="file"
            name="profilePicture"
            onChange={(event) =>
              formik.setFieldValue(
                "profilePicture",
                event.currentTarget.files[0]
              )
            }
          />
          {formik.errors.profilePicture && formik.touched.profilePicture && (
            <div className="error">{formik.errors.profilePicture}</div>
          )}
        </div>

        <div>
          <label>Employee ID</label>
          <input
            type="text"
            name="employeeId"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.employeeId}
          />
          {formik.errors.employeeId && formik.touched.employeeId && (
            <div className="error">{formik.errors.employeeId}</div>
          )}
        </div>

        <div>
          <label>Employee Name</label>
          <input
            type="text"
            name="employeeName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.employeeName}
          />
          {formik.errors.employeeName && formik.touched.employeeName && (
            <div className="error">{formik.errors.employeeName}</div>
          )}
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email && (
            <div className="error">{formik.errors.email}</div>
          )}
        </div>

        <div>
          <label>Gender</label>
          <select
            name="gender"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.gender}
          >
            <option value="" label="Select gender" />
            <option value="male" label="Male" />
            <option value="female" label="Female" />
            <option value="other" label="Other" />
          </select>
          {formik.errors.gender && formik.touched.gender && (
            <div className="error">{formik.errors.gender}</div>
          )}
        </div>

        <div>
          <label>Contact No</label>
          <input
            type="text"
            name="contactNo"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.contactNo}
          />
          {formik.errors.contactNo && formik.touched.contactNo && (
            <div className="error">{formik.errors.contactNo}</div>
          )}
        </div>

        <div>
          <label>Role</label>
          <select
            name="role"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.role}
          >
            <option value="" label="Select role" />
            <option value="employee" label="Employee" />
            <option value="manager" label="Manager" />
            <option value="admin" label="Admin" />
          </select>
          {formik.errors.role && formik.touched.role && (
            <div className="error">{formik.errors.role}</div>
          )}
        </div>

        <div>
          <label>Date of Joining</label>
          <input
            type="date"
            name="dateOfJoining"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dateOfJoining}
          />
          {formik.errors.dateOfJoining && formik.touched.dateOfJoining && (
            <div className="error">{formik.errors.dateOfJoining}</div>
          )}
        </div>

        <div>
          <label>Date of Confirmation</label>
          <input
            type="date"
            name="dateOfConfirmation"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dateOfConfirmation}
          />
          {formik.errors.dateOfConfirmation &&
            formik.touched.dateOfConfirmation && (
              <div className="error">{formik.errors.dateOfConfirmation}</div>
            )}
        </div>

        <div>
          <label>Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dateOfBirth}
          />
          {formik.errors.dateOfBirth && formik.touched.dateOfBirth && (
            <div className="error">{formik.errors.dateOfBirth}</div>
          )}
        </div>

        <div>
          <label>Address</label>
          <textarea
            name="address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
          />
          {formik.errors.address && formik.touched.address && (
            <div className="error">{formik.errors.address}</div>
          )}
        </div>

        <div>
          <label>Office Location</label>
          <input
            type="text"
            name="officeLocation"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.officeLocation}
          />
          {formik.errors.officeLocation && formik.touched.officeLocation && (
            <div className="error">{formik.errors.officeLocation}</div>
          )}
        </div>

        <div>
          <label>Designation</label>
          <input
            type="text"
            name="designation"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.designation}
          />
          {formik.errors.designation && formik.touched.designation && (
            <div className="error">{formik.errors.designation}</div>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>

      <h3>Submitted Data:</h3>
      <pre>{JSON.stringify(submittedData, null, 2)}</pre>
    </div>
  );
};

export default EmployeeForm;
