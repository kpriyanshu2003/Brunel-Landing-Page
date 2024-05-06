import { useState } from "react";
import NavBar from "../components/NavBar";
import HeadContent from "../components/HeadContent";
import Input from "../components/Input";
import Button from "../components/Button";

function Register() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errorVal, setErrorVal] = useState({ name: "", email: "" });
  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (emailRegex.test(formData.email) === false)
      setErrorVal({ ...errorVal, email: "Email is invalid" });
    else {
      setErrorVal({ name: "", email: "" });
      console.log(formData);
    }
  };

  return (
    <>
      <NavBar />
      <HeadContent
        subtitle="Registration Form"
        title1="Start your success"
        title2="Journey here!"
      />
      <form
        className="mt-10 grid justify-center w-full"
        onSubmit={(e) => handleSubmit(e)}
      >
        <Input
          type="text"
          text={errorVal.name}
          placeholder="Enter your name"
          value={formData.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
        />
        <Input
          type="text"
          text={errorVal.email}
          placeholder="Enter your email"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
        />
        <Button
          variant="primary"
          className="my-3"
          disabled={!(formData.email.length > 0 && formData.name.length > 0)}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </>
  );
}

export default Register;
