import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main image.svg";

import { Link } from "react-router-dom";
import { Logo } from "../components";
function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Tracking</span> Apps
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut
            blandit nibh. Suspendisse porttitor aliquam metus, non porta massa
            dignissim ac. Aliquam vitae sapien purus. Donec quis urna ante.
            Donec libero ligula, congue nec ex quis, dapibus pellentesque augue.
          </p>
          <Link to="/register" className="btn register-link">
            {" "}
            Register
          </Link>
          <Link to="/login" className="btn ">
            {" "}
            Login
          </Link>
        </div>
        <img src={main} alt="image job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
}
export default Landing;
