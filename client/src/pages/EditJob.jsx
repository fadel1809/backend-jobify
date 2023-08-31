/* eslint-disable no-unused-vars */
import { FormRow, FormRowSelect, SubmitBtn } from "../components";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { useLoaderData, useParams } from "react-router-dom";
import { JOB_STATUS, JOB_TYPE } from "../../../utils/constants";
import { Form, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/jobs/${params.id}`);

    return data;
  } catch (error) {
    toast.error(error.response.data);
    return redirect("/dashboard/all-jobs");
  }
};
export const action = async ({ request, params }) => {
  const formData = await request.formData();

  const data = Object.fromEntries(formData);
  try {
    await customFetch.patch(`/jobs/${params.id}`, data);
    toast.success("Edit job successfully!");
    return redirect("/dashboard/all-jobs");
  } catch (error) {
    toast.error(error.response.data);
    return error;
  }
};
const EditJob = () => {
  const { job } = useLoaderData();

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">edit job</h4>
        <div className="form-center">
          <FormRow name="position" defaultValue={job.position} type="text" />
          <FormRow name="company" defaultValue={job.company} type="text" />
          <FormRow
            name="jobLocation"
            defaultValue={job.jobLocation}
            labelText="job location"
            type="text"
          />
          <FormRowSelect
            name="jobStatus"
            defaultValue={job.jobStatus}
            labelText="job status"
            list={Object.values(JOB_STATUS)}
          />
          <FormRowSelect
            name="jobType"
            defaultValue={job.jobType}
            labelText="job type"
            list={Object.values(JOB_TYPE)}
          />
          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  );
};
export default EditJob;
