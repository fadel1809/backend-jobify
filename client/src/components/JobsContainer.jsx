/* eslint-disable no-unused-vars */
import Job from "./Job";
import Wrapper from "../assets/wrappers/JobsContainer";
import { useAllJobsContext } from "../pages/AllJobs";
import PageBtnContaianer from "./PageBtnContaianer";
const JobsContainer = () => {
  const { data } = useAllJobsContext();
  const { jobs, totalJobs, numOfPages } = data;
  if (jobs.length === 0) {
    return (
      <Wrapper>
        {" "}
        <h2>No job to display</h2>{" "}
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h5>
        {" "}
        {totalJobs} job{jobs.length > 1 && "s"} found{" "}
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContaianer />}
    </Wrapper>
  );
};
export default JobsContainer;
