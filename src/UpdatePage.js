import logo from "./logo.svg";
import "./App.css";
import { UpdateForm } from "./UpdateForm.js";
import { ToastContainer } from "react-toastify";

function UpdatePage() {
  return (
    <>
      <UpdateForm></UpdateForm>
      <ToastContainer />
    </>
  );
}

export default UpdatePage;
