/* eslint-disable no-unused-vars */
import { FormRow, SubmitBtn } from "../components";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { useOutletContext } from "react-router-dom";
import { Form } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const data = await request.formData();
  const file = data.get("avatar");
  if (file && file.size > 500000) {
    toast.error("the file is larger than 0.5 MB");
    return null;
  }
  try {
    await customFetch.patch("/users/update-user", data);
    toast.success("profile updated successfully");
    return null;
  } catch (error) {
    toast.error(error.response.data);
    return null;
  }
};
const Profile = () => {
  const { user } = useOutletContext();
  const { name, lastName, email, location } = user;

  return (
    <Wrapper>
      <Form className="form" method="post" encType="multipart/form-data">
        <h4 className="form-title">Profile</h4>
        <div className="form-center">
          <div className="form-row">
            <label htmlFor="image" className="form-label">
              {" "}
              Select an image file (Max: 500kb)
            </label>
            <input
              type="file"
              id="avatar"
              name="avatar"
              className="form-input"
              accept="image/*"
            />
          </div>
          <FormRow name="name" type="text" defaultValue={name} />
          <FormRow
            name="lastName"
            type="text"
            defaultValue={lastName}
            labelText="last name"
          />
          <FormRow name="email" type="email" defaultValue={email} />
          <FormRow name="location" type="text" defaultValue={location} />
          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  );
};
export default Profile;
