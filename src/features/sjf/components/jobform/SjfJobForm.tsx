import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Fade,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import useSjfJobActions from "./useSjfJobActions";

// Validation schema
const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  duration: Yup.number()
    .positive("Must be positive and greater than zero")
    .moreThan(0, "Must be greater than zero")
    .required("Required"),
  description: Yup.string(),
});

interface SjfJobFormProps {
  open: boolean;
  handleClose: () => void;
}
const SjfJobForm: React.FC<SjfJobFormProps> = ({ open, handleClose }) => {
  const { handleCreateSjfJob } = useSjfJobActions();
  return (
    <Dialog
      open={open}
      onClose={() => {
        // handleClose(); // TODO: Uncomment this line to close the dialog on overlay click
      }}
      TransitionComponent={Fade}
    >
      <Formik
        initialValues={{ name: "", duration: "", description: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          // Handle form submission
          handleCreateSjfJob(values);
          handleClose(); // Close the dialog on submission
          setSubmitting(false);
        }}
      >
        {({ errors, touched, handleChange, handleBlur }) => (
          <Form>
            <DialogTitle>Add Job</DialogTitle>
            <DialogContent>
              <Field
                as={TextField}
                // autoFocus
                margin="dense"
                name="name"
                label="Name"
                type="text"
                fullWidth
                variant="standard"
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
              />
              <Field
                as={TextField}
                margin="dense"
                name="duration"
                label="Job Duration"
                type="text"
                fullWidth
                variant="standard"
                inputProps={{ pattern: "[0-9]*[.,]?[0-9]*" }}
                error={touched.duration && Boolean(errors.duration)}
                helperText={touched.duration && errors.duration}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Field
                as={TextField}
                margin="dense"
                name="description"
                label="Description"
                type="text"
                fullWidth
                variant="standard"
                error={touched.description && Boolean(errors.description)}
                helperText={touched.description && errors.description}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit">Submit</Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};

export default SjfJobForm;
