import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

function Detail() {
  const location = useLocation();
  const { number, userName, contents, date } = location.state || {}; // 전달된 데이터 수신

  return (
    <div>
      <Helmet>
        <title>JOVA | {contents}</title>
      </Helmet>
      <h1>{number}</h1>
      <p>{userName || "No data available"}</p>{" "}
      <p>{contents || "No data available"}</p>{" "}
      <p>{date || "No data available"}</p>{" "}
    </div>
  );
}

export default Detail;
