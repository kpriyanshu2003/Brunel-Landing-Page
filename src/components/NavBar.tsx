import { Link } from "react-router-dom";
import Container from "./Container";
import Button from "./Button";
import { useLocation } from "react-router-dom";
import { CloseIcon } from "../constants/Icons";

function NavBar() {
  const location = useLocation().pathname;
  return (
    <Container
      className={`
      ${location === "/" && "border rounded-full"} flex justify-between mt-4`}
    >
      <Link to="/" className="flex items-center ml-8">
        <img src="/logo.svg" alt="Logo" />
      </Link>
      {location === "/" && (
        <div className="flex gap-5">
          <Button
            variant="secondary"
            onClick={() => (window.location.href = "/register")}
          >
            Get Projects
          </Button>
          <Button variant="primary">OnBoard Talent</Button>
        </div>
      )}
      {location === "/register" && (
        <Link to="/" className="p-4 border rounded-full cursor-pointer">
          <CloseIcon />
        </Link>
      )}
    </Container>
  );
}

export default NavBar;
