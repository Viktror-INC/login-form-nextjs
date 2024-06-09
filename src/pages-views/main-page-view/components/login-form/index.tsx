import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { useFormik } from "formik";
import { loginFormValidation } from "./validation";
import { StyledLoginForm } from "./styles";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showCorrectFields, setShowCorrectFields] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginFormValidation,
    validateOnChange: false,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const inputs = [
    {
      name: "email",
      id: "email",
      value: formik.values.email,
      error: formik.errors.email,
      type: "text",
      endAdornment: null,
      placeholder:"",
    },
  ];

  return (
    <StyledLoginForm
      onSubmit={(event) => {
        setShowCorrectFields(true);
        formik.handleSubmit(event);
      }}
    >
      <OutlinedInput
        className={
          showCorrectFields && !formik.errors.email ? "Mui-success" : ""
        }
        type={"text"}
        id="email"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        placeholder="email"
        error={!!formik.errors.email}
      />
      {!!formik.errors.email && (
        <FormHelperText error>{formik.errors.email}</FormHelperText>
      )}
      <OutlinedInput
        className={
          showCorrectFields && !formik.errors.password ? "Mui-success" : ""
        }
        type={showPassword ? "text" : "password"}
        id="password"
        name="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        placeholder="Password"
        error={!!formik.errors.password}
      />
      {!!formik.errors.password && (
        <FormHelperText error id="username-error">
          {formik.errors.password}
        </FormHelperText>
      )}
      <Button type="submit" variant="contained">
        Sign up
      </Button>
    </StyledLoginForm>
  );
};

export default LoginForm;
