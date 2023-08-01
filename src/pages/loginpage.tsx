import { Formik, Form } from "formik";
import * as Yup from "yup";
import Inputfield from "../components/inputfield";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { BsLock } from "react-icons/bs";
import { PiGoogleLogo } from "react-icons/pi";
import { CiFacebook, CiTwitter } from "react-icons/ci";
import Navbar from "../components/navbar";
import Footer from '../components/footer'

const Loginpage = () => {
  const initialvalues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Please enter valid email address."),
    password: Yup.string().required("Please enter correct password"),
    checkbox: Yup.boolean().oneOf(
      [true],
      "Please accept all the terms and conditions."
    ),
  });
  const navigate = useNavigate();
  const handleSubmit = (values: typeof initialvalues) => {
    axios
      .post(" http://localhost:3000/login", {
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        toast.success("Scuccessfully signed in");
        console.log(response.data);
        navigate("/dashboard");
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
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {() => {
          return (
            <div className="flex flex-col justify-center items-center  backdrop-blur-sm  font-medium w-3/5 mx-auto">
              
              <Form className="w-[50%]  bg-white bg-opacity-50 border-l-2 border-r-2 p-8 flex flex-col justify-center">
                <h1 className="text-3xl mb-4">LOGIN</h1>
                <Inputfield
                  type="text"
                  name="email"
                  label="Email Address"
                  icon={<FiUser />}
                />
                <Inputfield
                  type="password"
                  name="password"
                  label="Password"
                  icon={<BsLock />}
                />
                <p className="text-right mb-8">Forgot Password?</p>
                <button
                  type="submit"
                  className="border-2 w-full mb-6 border-black p-1 rounded-md text-lg  hover:bg-stone-500 hover:border-none hover:text-white"
                >
                  {" "}
                  LogIn
                </button>
                Don't have an Account?
                <Link
                  to="/registrationpage"
                  className="text-center underline mb-4 mt-4"
                >
                  Sign Up
                </Link>
                <p className="text-center mb-4">OR</p>
                <p className="text-center">Sign Up Using</p>
                <div className="flex items-center justify-between w-32 mx-auto mt-4">
                  <CiFacebook size={35} />
                  <PiGoogleLogo size={35} />
                  <CiTwitter size={38} />
                </div>
              </Form>
              <ToastContainer className="ml-auto" />
            </div>
          );
        }}
      </Formik>
      <Footer/>
    </div>
  );
};

export default Loginpage;
