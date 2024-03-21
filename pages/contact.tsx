import ContactForm, { FormValues } from "@/components/Contact/ContactForm";
import MessageSent from "@/components/Contact/MessageSent";
import useMediaQuery from "@/hooks/useMediaQuery";
import classNames from "classnames";
import { useFormik } from "formik";
import { useState } from "react";
import { motion } from "framer-motion";
import * as Yup from "yup";

export default function Contact() {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const { isLg } = useMediaQuery();

  const formik = useFormik<FormValues>({
    validateOnChange: false,
    validateOnBlur: false,
    initialValues: {
      subject: "",
      name: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((res) => res.json())
        .then((data) => {
          setHasSubmitted(true);
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  if (hasSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center mt-28">
        <MessageSent />
      </div>
    );
  }

  return (
    <div
      className={classNames(
        "flex flex-col px-8 lg:pr-[60px] lg:pl-[45px] py-10 lg:py-16 bg-[#EAEEF5] mt-28",
        "space-x-0 space-y-14",
        "lg:flex-row lg:justify-between lg:space-x-14 lg:space-y-0 rounded-xl text-primary"
      )}
    >
      <motion.div
        className="flex flex-col flex-1 lg:pl-[55px]"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        {isLg ? (
          <div className="flex items-center relative mb-4">
            <div className="h-px w-8 bg-primary absolute -translate-x-full -left-4" />
            <div className="font-bold text-primary">CONTACT</div>
          </div>
        ) : (
          <div className="font-bold text-primary mb-4">CONTACT</div>
        )}

        <p className="font-black text-primary lg:text-[45px] text-[38px] mb-6">
          For more information, please feel free to contact us.
        </p>
        <p className="text-primary font-medium text-md">
          If you need any help or you have an enquiry, our direct message box is
          at your disposal.
        </p>
      </motion.div>
      <motion.div
        className="flex-1"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <ContactForm formik={formik} />
      </motion.div>
    </div>
  );
}

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  message: Yup.string().required("Message is required"),
});
