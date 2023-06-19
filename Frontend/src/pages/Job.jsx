import React from "react";
import useFetchJob from "../hooks/useFetchJob";
import { useParams } from "react-router-dom";

const Job = () => {
  const {id} = useParams()
  const data = useFetchJob(id).data;
  console.log(data.formations);
  if (data.formations)
  window.location.href ="/SubCategory/" + data.formations

  return (<div className="bg-black"></div>);
};

export default Job;
