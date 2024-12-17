import { useLocation } from "react-router-dom";

function Detail() {
  const location = useLocation();
  const { number, userName, contents, date } = location.state || {}; // 전달된 데이터 수신

  return (
    <div>
      <h1>{number}</h1>
      <p>{userName || "No data available"}</p>{" "}
      <p>{contents || "No data available"}</p>{" "}
      <p>{date || "No data available"}</p>{" "}
    </div>
  );
}

export default Detail;
