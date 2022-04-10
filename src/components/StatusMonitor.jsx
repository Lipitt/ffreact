import React from "react";
import { StyledStatusMonitor } from "./styles/StatusMonitor.styled";

const StatusMonitor = ({ name, apiData }) => {
  const convertTime = (timeToConvert) => {
    const timeStamp = new Date(timeToConvert);
    const time = timeStamp.toLocaleTimeString("es-AR", { hour12: false });
    return time;
  };

  return (
    <StyledStatusMonitor>
      <h2>{name}</h2>
      {apiData.status === "fulfilled" ? (
        <>
          <h2>Healty</h2>
          <p>{apiData.value.data.hostname}</p>
          <p>{convertTime(apiData.value.data.time)}</p>
        </>
      ) : (
        <>
          <h2>Error</h2>
          <p>403: Forbidden</p>
        </>
      )}
    </StyledStatusMonitor>
  );
};

export default StatusMonitor;
