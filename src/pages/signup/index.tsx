"use client";
import { SubmitHandler } from "react-hook-form";
import { Col, Row } from "antd";
import Image from "next/image";
import Form from "../../components/Forms/Form";
import FormInput from "../../components/Forms/FormInput";
import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Link from "next/link";

type FromValues = {
  name: string;
  email: string;
  password: string;
};
export default function SignUp() {
  const onSubmit: SubmitHandler<FromValues> = (data) => {
    try {
      console.log(data);
    } catch (err) {}
  };
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
      }}
    >
      <Col sm={12} md={8} lg={14}>
        <div className="mx-20 max-sm:m-4">
          <h1 className="text-4xl font-bold text-primary">LOGO</h1>
          <h1 className="text-3xl font-semibold">
            Get Started <span className="text-primary">Now</span>{" "}
          </h1>
          <Form submitHandler={onSubmit}>
            <div className="my-2">
              <FormInput
                name="email"
                type="text"
                size="large"
                label="Name"
                placeholder="Enter your name"
              ></FormInput>
              <div className="my-4">
                <FormInput
                  name="email"
                  type="email"
                  size="large"
                  label="Email address"
                  placeholder="Enter your email"
                ></FormInput>
              </div>
              <FormInput
                name="password"
                type="password"
                size="large"
                label="Password"
                placeholder="Enter your password"
              ></FormInput>
            </div>
            <Checkbox onChange={onChange}>
              I agree to the terms & policy
            </Checkbox>
            <button
              type="submit"
              className="bg-primary p-2 text-white w-full rounded-xl mt-2"
            >
              Signup
            </button>
          </Form>
          <div className="flex justify-center items-center my-4 ">
            <hr className=" w-1/2 mr-2" /> Or <hr className="ml-2 w-1/2" />
          </div>
          <div className="flex justify-between items-center my-4 ">
            <button className="flex  items-center p-1 px-4 border-2 rounded-xl">
              {" "}
              <FcGoogle size={24} /> Sign In with Google
            </button>
            <button className="flex  items-center p-1  px-6 border-2 rounded-xl">
              {" "}
              <FaApple size={24} /> Sign In with Apple
            </button>
          </div>
          <span className="flex justify-center">
            Don’t have an account?<Link href={"/login"}> Sign In</Link>
          </span>
        </div>
      </Col>
      <Col sm={12} md={16} lg={10} className="mt-2">
        <Image
          src={"/img/login.png"}
          alt="login image"
          width={500}
          height={500}
          loading="lazy"
        />
      </Col>
    </Row>
  );
}
