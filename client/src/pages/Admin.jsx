/* eslint-disable no-unused-vars */
import { FaSuitcaseRolling, FaCalendarCheck } from "react-icons/fa";

import { useLoaderData, redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";
import Wrapper from "../assets/wrappers/StatsContainer";
import { toast } from "react-toastify";
import { StatItem } from "../components";
export const loader = async () => {
  try {
    const response = await customFetch.get("users/admin/app-stats");
    return response.data;
  } catch (error) {
    toast.error("You are not authorized");
    return redirect("/dashboard");
  }
};
const Admin = () => {
  const { users, jobs } = useLoaderData();

  return (
    <Wrapper>
      <StatItem
        title="current users"
        color="#e9b949"
        bcg="#fcefc7"
        icon={<FaSuitcaseRolling />}
        count={users}
      />
      <StatItem
        title="total jobs"
        color="#647acb"
        bcg="#fcefc7"
        icon={<FaCalendarCheck />}
        count={jobs}
      />
    </Wrapper>
  );
};
export default Admin;
