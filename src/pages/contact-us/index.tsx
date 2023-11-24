"use client";
import { SubmitHandler } from "react-hook-form";
import { Col, Row } from "antd";
import Image from "next/image";
import Form from "../../components/Forms/Form";
import FormInput from "../../components/Forms/FormInput";
import { FiPhoneCall } from "react-icons/fi";
import { RiMailDownloadFill } from "react-icons/ri";

type FromValues = {
  name: string;
  phone: string;
  message: string;
};
export default function ContactUs() {
  const onSubmit: SubmitHandler<FromValues> = (data) => {
    try {
      console.log(data);
    } catch (err) {}
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
            Get In <span className="text-primary">Touch!</span>{" "}
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
                  name="phone"
                  type="text"
                  size="large"
                  label="Phone Number"
                  placeholder="Enter your number"
                ></FormInput>
              </div>
              <FormInput
                name="message"
                type="textarea"
                size="large"
                label="Message"
                placeholder="Write your message here"
              ></FormInput>
            </div>

            <button
              type="submit"
              className="bg-primary p-2 text-white w-full rounded-xl mt-2"
            >
              Send
            </button>
          </Form>

          <div className="flex justify-between items-center my-4 ">
            <div className="flex items-center">
              <FiPhoneCall size={24} />
              <div className="ml-2">
                <span>PHONE </span>
                <h4 className="text-primary">54 8754 2154</h4>
              </div>
            </div>
            <div className="flex items-center">
              <RiMailDownloadFill size={24} />
              <div className="ml-2">
                <span>EMAIL </span>
                <h4 className="text-primary">info@standups7.com</h4>
              </div>
            </div>
          </div>
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
