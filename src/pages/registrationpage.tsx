import Inputfield from "../components/inputfield";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiUser } from "react-icons/fi";
import { BsLock } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Navbar from "../components/navbar";
import Footer from '../components/footer'

const Registrationpage = () => {
  const initialvalues = {
    name: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Please enter your Name."),
    username: Yup.string().required("Please enter your username."),
    email: Yup.string().required("Please enter valid email address."),
    password: Yup.string().required("Please enter correct password"),
    confirmpassword: Yup.string()
      .required("Please confirm password")
      .oneOf([Yup.ref("password")], "Password must match"),
    checkbox: Yup.boolean().oneOf(
      [true],
      "Please accept all the terms and conditions."
    ),
  });
  const navigate = useNavigate();
  const handleSubmit = (values: typeof initialvalues) => {
    axios
      .post(" http://localhost:3000/users", {
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        toast.success("Scuccessfully created your account.");
        navigate("/sign-in");
        localStorage.setItem("session-token", response.data.accessToken);
      })

      .catch(() => {
        toast.error("Could not sign in");
      });
  };

  return (
    <div className="bg-stone-200  flex flex-col justify-center">
      <Navbar/>
      <Formik
        initialValues={initialvalues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col justify-center mx-auto backdrop-blur-sm  font-medium w-3/5">
          <Form className=" bg-white bg-opacity-50 border-l-2 border-r-2 p-8 flex flex-col justify-center w-[60%] mx-auto mt-8">
            <h1 className="text-3xl mb-4 mt-4">REGISTER</h1>
            <Inputfield
              type="text"
              name="name"
              label="Name"
              icon={<FiUser />}
            />
            <Inputfield
              type="text"
              name="username"
              label="Username"
              icon={<FiUser />}
            />
            <Inputfield
              type="text"
              name="email"
              label="Email"
              icon={<AiOutlineMail />}
            />
            <Inputfield
              type="password"
              name="password"
              label="Password"
              icon={<BsLock />}
            />
            <Inputfield
              type="password"
              name="confirmpassword"
              label="Confirm Password"
              icon={<BsLock />}
            />

            <button
              type="submit"
              className="border-2  hover:bg-stone-500 hover:border-none hover:text-white w-full mb-6 border-black p-1 rounded-md text-lg backdrop-blur-md hover:scale-95"
            >
              Register
            </button>
          </Form>
        </div>
      </Formik>
      <Footer/>
    </div>
  );
};

export default Registrationpage;
