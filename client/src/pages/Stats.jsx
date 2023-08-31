/* eslint-disable no-unused-vars */
import { ChartsContainer, StatsContainer } from "../components";
import customFetch from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";
export const loader = async () => {
  try {
    const response = await customFetch.get("jobs/stats");
    return response.data;
  } catch (error) {
    return error;
  }
};
const Stats = () => {
  const { defaultStats, monthlyApplication } = useLoaderData();
  console.log(`defalultstats:${defaultStats}`);
  return (
    <>
      <StatsContainer defaulStats={defaultStats} />
      {monthlyApplication?.length > 0 && (
        <ChartsContainer data={monthlyApplication} />
      )}
    </>
  );
};
export default Stats;
