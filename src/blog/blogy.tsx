import { Link } from "react-router-dom";
import Text from "../comp/text";
import "../App.css";

function Blogy() {
  return (
    <div className="page-background">
      <Text size="large" weight="bold" color="white" className="h1">
        Welcome To my blog!
      </Text>
      <Text size="medium" weight="bold" color="white" className="p1">
        My Blogs are listed below!
      </Text>

      <Link to="physicsEngine" className="blog-link">
        <button className="github-button">Physics Engine Blog</button>
      </Link>
    </div>
  );
}

export default Blogy;
