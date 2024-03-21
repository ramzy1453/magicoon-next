import React from "react";
import InputForm from "./InputForm";
import Image from "next/image";
import SelectForm from "./SelectForm";
import { FormikProps } from "formik";

export interface FormValues {
  name: string;
  subject: string;
  email: string;
  message: string;
}

type Props = {
  formik: FormikProps<FormValues>;
};

export default function ContactForm({ formik }: Props) {
  return (
    <form className="space-y-4" onSubmit={formik.handleSubmit}>
      <InputForm
        id="name"
        type="input"
        placeholder="Name"
        value={formik.values.name}
        handleChange={formik.handleChange}
      />
      <InputForm
        id="email"
        type="input"
        email
        placeholder="Email"
        value={formik.values.email}
        handleChange={formik.handleChange}
      />
      <SelectForm
        selectOptions={selectOptions}
        setSubject={(subject: string) => {
          formik.setFieldValue("subject", subject);
        }}
      />
      <InputForm
        id="message"
        type="textarea"
        placeholder="Message"
        value={formik.values.message}
        handleChange={formik.handleChange}
      />

      <button
        type="submit"
        className="btn btn-info hover:bg-[#0c48d3] btn-block rounded-full space-x-2"
      >
        <Image alt="send" src="send.svg" width={16} height={16} />
        <span className="font-bold text-[16px]">SEND MESSAGE</span>
      </button>
    </form>
  );
}

const selectOptions = [
  "Give a note / opinion",
  "Icons review",
  "Service request",
  "Other...",
];