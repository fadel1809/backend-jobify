/* eslint-disable react/no-unescaped-entities */
import { Form, Link, redirect, useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo, SubmitBtn } from "../components";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
export const action = async ({ request }) => {
  const formData = await request.formData();

  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("/auth/login", data);
    toast.success("Login Successful!");
    return redirect("/dashboard");
  } catch (error) {
    toast.error(error.response.data);
    return error;
  }
};
function Login() {
  const navigate = useNavigate();
  const loginDemoUser = async () => {
    const data = {
      email: "test@test.com",
      password: "secret123",
    };
    try {
      await customFetch.post("/auth/login", data);
      toast.success("Take a test drive");
      return navigate("/dashboard");
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Login</h4>
        <FormRow name="email" type="email" placeHolder="Email" />
        <FormRow name="password" type="password" placeHolder="Password" />
        <SubmitBtn />
        <button type="button" className="btn btn-block" onClick={loginDemoUser}>
          Explore the app
        </button>
        <p>
          don't have account?
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
}
export default Login;
