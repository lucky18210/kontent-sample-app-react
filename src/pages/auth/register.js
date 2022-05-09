import React, { useState } from "react";
import Input from "../../components/Input";
import { minMaxLength, validEmail } from "../../utils/valid";

import {
  Link,
  NextAction,
  RegisterBack,
  RegisterContent,
  RegisterForm,
  RegisterStep,
  RegisterWrapper,
  SelectValid,
} from "./register.styled";

const Register = () => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({});

  const [errors, setErrors] = useState({
    fullname: "",
    email: "",
    role: "",
    password: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "fullname":
        if (minMaxLength(value, 3)) {
          setErrors({
            ...errors,
            fullname: "Minimum 3 characters",
          });
        } else {
          delete errors.fullname;
        }
        setUser({ ...user, fullname: value });
        break;
      case "email":
        if (!value || validEmail(value)) {
          setErrors({
            ...errors,
            email: "Please enter a valid email address",
          });
        } else {
          delete errors.email;
        }
        setUser({ ...user, email: value });
        break;
      case "role":
        if (!value) {
          setErrors({
            ...errors,
            role: "Role is required",
          });
        } else {
          delete errors.role;
        }
        setUser({ ...user, role: value });
        break;
      case "password":
        if (minMaxLength(value, 8)) {
          setErrors({
            ...errors,
            password: "Password should have minimum 8 characters",
          });
        } else {
          delete errors.password;
        }
        setUser({ ...user, password: value });
        break;
      default:
        break;
    }
    console.log(user, errors);
  };

  const next = () => {
    alert("success");
  };
  
  const checkProperties = (obj) => {
    for (var key in obj) {
      if (obj[key] === null && obj[key] === "") {
        return false;
      } else {
        return true;
      }
    }
  };

  return (
    <RegisterWrapper>
      <RegisterContent>
        <RegisterStep>Step 1 of 3　• • •</RegisterStep>
        <RegisterForm>
          <h2>Let's set up your account</h2>
          <label>
            Already have a account? <Link to={"/"}>Sign in</Link>
          </label>
          <Input
            type="text"
            name="fullname"
            placeholder="Your name"
            value={user.fullname}
            onChange={onChange}
            error={errors.fullname}
          />
          <Input
            type="text"
            name="email"
            value={user.email}
            placeholder="Email address"
            onChange={(e) => onChange(e)}
            error={errors.email}
          />
          <select name="role" onChange={onChange}>
            <option value="">I would describe my user type as</option>
            <option value="Developer">Developer</option>
            <option value="Client">Client</option>
            <option value="Other">Other</option>
          </select>
          {errors.role && <SelectValid>{errors.role}</SelectValid>}
          <Input
            type="password"
            name="password"
            placeholder="Password"
            show={show}
            setShow={() => setShow(!show)}
            value={user.password}
            onChange={onChange}
            error={errors.password}
          />
          <NextAction
            onClick={next}
            disabled={checkProperties(errors)}
            hasError={checkProperties(errors)}
          >
            Next
          </NextAction>
          <label className="policy">
            By clicking the "Next" button, you agree to creatinga free account,
            and to <Link to={"/"}>Terms of Service</Link> and{" "}
            <Link to={"/"}>Privacy Policy</Link>
          </label>
        </RegisterForm>
      </RegisterContent>
      <RegisterBack>
        <h2>Dummy Heading</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </RegisterBack>
    </RegisterWrapper>
  );
};

export default Register;
