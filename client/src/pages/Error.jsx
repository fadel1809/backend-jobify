/* eslint-disable no-unused-vars */
import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/images/not-found.svg";
function Error() {
  const error = useRouteError();
  const { status, statusText } = error;
  if (status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>Halaman tidak ada!</h3>
          <p>Halaman yang anda cari tidak ada, maaf ya :)</p>
          <Link to="/dashboard">Back Home</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div>
        <h1>Somethin Wrong Try Again!</h1>

        <Link to="/">Go Home</Link>
      </div>
    </Wrapper>
  );
}
export default Error;
