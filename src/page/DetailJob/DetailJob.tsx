import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import InfoBoxJob from "./infoBoxJob";
import Header from "../../components/Header";

function DetailJob() {
  const location = useLocation();
  const { userName, title, date, content } = location.state || {}; // 전달된 데이터 수신

  return (
    <div>
      <Helmet>
        <title>JOVA | {title}</title>
      </Helmet>
      <Header />
      <InfoBoxJob
        Name={userName}
        Title={title}
        TimeDate={date}
        Contents={content}
      />
    </div>
  );
}

export default DetailJob;
