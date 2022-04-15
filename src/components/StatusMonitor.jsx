import React from "react";
import { StyledStatusMonitor } from "./styles/StatusMonitor.styled";

const StatusMonitor = ({ apiData }) => {
  console.log(apiData);
  const convertTime = (timeToConvert) => {
    const timeStamp = new Date(timeToConvert);
    const time = timeStamp.toLocaleTimeString("es-AR", { hour12: false });
    return time;
  };

  return (
    <StyledStatusMonitor>
      <h2>nombre</h2>
      {apiData.status === "fulfilled" ? (
        <>
          <h2>Healty</h2>
          <p>{apiData.value.data.hostname}</p>
          <p>{convertTime(apiData.value.data.time)}</p>
        </>
      ) : (
        <>
          <h2>Error</h2>
          <p>{apiData.status}</p>
        </>
      )}
    </StyledStatusMonitor>
  );
};

export default StatusMonitor;
