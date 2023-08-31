import { redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ params }) => {
  try {
    await customFetch.delete(`/jobs/${params.id}`);
    toast.success("Job Deleted Successfully!");
    return redirect("/dashboard/all-jobs");
  } catch (error) {
    toast.error(error.response.data);
    return error;
  }
};

const DeleteJob = () => {
  return <div>DeleteJob</div>;
};
export default DeleteJob;
