/* eslint-disable no-unused-vars */
import React from "react";
import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { MdAdminPanelSettings } from "react-icons/md";

const links = [
  { text: "Add job", path: ".", icon: <FaWpforms /> },
  { text: "All jobs", path: "all-jobs", icon: <MdQueryStats /> },
  { text: "Stats", path: "stats", icon: <IoBarChartSharp /> },
  { text: "Profile", path: "profile", icon: <ImProfile /> },
  { text: "Admin", path: "admin", icon: <MdAdminPanelSettings /> },
];

export default links;
