import { Link } from "react-router-dom";
import Container from "./Container";

function Footer() {
  return (
    <Container className="bg-[#F5F5F5] rounded-3xl text-sm text-center md:flex justify-between p-4 md:px-10 md:py-10">
      <span>&copy; Talup 2023. All rights reserved</span>
      <div className="flex gap-7 items-center underline justify-center mt-4 md:mt-0">
        <Link to="#">Terms & Conditions</Link>
        <Link to="#">Privacy Policy</Link>
      </div>
    </Container>
  );
}

export default Footer;
