import React from "react";
// import Button from "./button";
import Form from "./Form.js";
import { useState } from "react";
import Table from "./Table.js";
import axios from "axios";
import { useParams } from "react-router-dom";

export const UpdateForm = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    mobile_no: "",
    email: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Inside your UpdateForm component
  const handleSubmit = (e) => {
    e.preventDefault();
    addDataToTable(formData); // Call the function to add data to the table
    setFormData({
      name: "",
      designation: "",
      email: "",
      mobile_no: "",
      address: "",
    }); // Clear the form fields
  };

  const [mainFormData, setMainFormData] = useState({
    customer_type: "",
    reff_no: "",
    title: "",
    company_name: "",
    cust_name: "",
    identity_number: "",
    open_balance: "",
    sales_person: "",
    posting_address: "",
    name: "",
    designation: "",
    email: "",
    mobile_no: "",
    address: "",
  });

  const handleMainInputChange = (e) => {
    const { name, value } = e.target;
    setMainFormData({ ...mainFormData, [name]: value });
  };

  const handleMainFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:3001/api/update-data/${id}`,
        mainFormData
      );

      if (response.data.message === "Data saved successfully") {
        console.log("Data saved successfully");
      }
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const [tableData, setTableData] = useState([]);

  const addDataToTable = (formData) => {
    setTableData([...tableData, formData]);
  };

  const [AddressVal, setAddressVal] = useState("");
  const [billingAddressVal, setBillingAddressVal] = useState("");
  const [duplicatedAddress, setduplicatedAddress] = useState("");

  const handleAddressChange = (e) => {
    setAddressVal(e.target.value);
  };

  const handleBillingAddressChange = (e) => {
    setBillingAddressVal(e.target.value);
  };

  const handleAddressDuplicate = () => {
    setduplicatedAddress(AddressVal);
  };

  const [locationVal, setLocationVal] = useState("");
  const [secondLocationVal, setSecondLocationVal] = useState("");
  const [duplicatedLocation, setduplicatedLocation] = useState("");

  const handleLocationChange = (e) => {
    setLocationVal(e.target.value);
  };

  const handleSecondLocationChange = (e) => {
    setSecondLocationVal(e.target.value);
  };

  const handleLocationDuplicate = () => {
    setduplicatedLocation(locationVal);
  };

  return (
    <Form title="Update Employee">
      <div className="card card-white bg-white p-4 shadow-md border rounded-lg">
        <div className="grid gap-6 mb-6 md:grid-cols-1">
          <div className="grid gap-6 mb-6 md:grid-cols-4">
            <div className="form-group">
              <label
                htmlFor="customer_type"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                <span className="text-danger">*</span> Customer Type
              </label>
              <select
                id="customer_type"
                name="customer_type"
                onChange={handleMainInputChange}
                value={mainFormData.customer_type}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
                required
              >
                <option defaultValue>Choose a customer type</option>
                <option value="1">Daily</option>
                <option value="2">Premium</option>
                <option value="3">Online</option>
                <option value="4">Loyality</option>
                <option value="5">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label
                htmlFor="reff_no"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Refference No
              </label>
              <input
                type="text"
                id="reff_no"
                name="reff_no"
                onChange={handleMainInputChange}
                value={mainFormData.reff_no}
                className="bg-gray-50 border border-gray-300 text-dark-800 dark:text-white text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Please enter the refference number"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={handleMainInputChange}
                value={mainFormData.title}
                className="bg-gray-50 border border-gray-300 text-dark-800 dark:text-white text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Please enter the title"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="company_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                <span className="text-danger">*</span> Company Name
              </label>
              <input
                type="text"
                id="company_name"
                name="company_name"
                onChange={handleMainInputChange}
                value={mainFormData.company_name}
                className="bg-gray-50 border border-gray-300 text-dark-800 dark:text-white text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Please enter the company name"
                required
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="cust_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                <span className="text-danger">*</span> Customer Name
              </label>
              <input
                type="text"
                id="cust_name"
                name="cust_name"
                onChange={handleMainInputChange}
                value={mainFormData.cust_name}
                className="bg-gray-50 border border-gray-300 text-dark-800 dark:text-white text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Please enter the customer name"
                required
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="identity_number"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                NIC / Passport Number
              </label>
              <input
                type="text"
                id="identity_number"
                name="identity_number"
                onChange={handleMainInputChange}
                value={mainFormData.identity_number}
                className="bg-gray-50 border border-gray-300 text-dark-800 dark:text-white text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Please enter the identity number"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="open_balance"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Opening Balance
              </label>
              <input
                type="text"
                id="open_balance"
                name="open_balance"
                onChange={handleMainInputChange}
                value={mainFormData.open_balance}
                className="bg-gray-50 border border-gray-300 text-dark-800 dark:text-white text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Please enter the opening balance"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="sales_person"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                <span className="text-danger">*</span> Sales Person
              </label>
              <select
                id="sales_person"
                name="sales_person"
                onChange={handleMainInputChange}
                value={mainFormData.sales_person}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
              >
                <option defaultValue>Choose a sales person</option>
                <option value="1">Daily</option>
                <option value="2">Premium</option>
                <option value="3">Online</option>
                <option value="4">Loyality</option>
                <option value="5">Other</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="card card-white bg-white p-4 shadow-md border rounded-lg mt-2">
        <div className="grid gap-6 mb-6 md:grid-cols-3">
          <div className="form-group">
            <label
              htmlFor="posting_address"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              <span className="text-danger">*</span> Posting Address
            </label>
            <textarea
              id="posting_address"
              name="posting_address"
              value={formData.posting_address}
              onChange={(event) => {
                handleAddressChange(event); // Pass the event object
                handleMainInputChange(event); // Pass the event object
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
              placeholder="Please enter the posting address"
              required
            ></textarea>
          </div>
          <button
            type="button"
            onClick={(event) => {
              handleAddressDuplicate();
              handleLocationDuplicate();
            }}
            className="inline-block rounded m-10 bg-secondary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-secondary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-secondary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-secondary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          >
            <i className="fas fa-exchange"></i>
          </button>

          <div className="form-group">
            <label
              htmlFor="billing_address"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              <span className="text-danger">*</span> Billing Address
            </label>
            <textarea
              id="billing_address"
              name="billing_address"
              value={
                duplicatedAddress != "" && billingAddressVal == ""
                  ? duplicatedAddress
                  : billingAddressVal
              }
              onChange={(event) => {
                handleAddressChange(event); // Pass the event object
                handleMainInputChange(event); // Pass the event object
                handleBillingAddressChange(event);
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
              placeholder="Please enter the posting address"
              required
            ></textarea>
          </div>
        </div>
        <div className="grid gap-6 mb-6 md:grid-cols-3">
          <div className="form-group">
            <label
              htmlFor="location1"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              <span className="text-danger">*</span> location
            </label>
            <textarea
              id="location1"
              name="location1"
              value={formData.location1}
              onChange={(event) => {
                handleLocationChange(event);
                handleMainInputChange(event);
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
              placeholder="Please enter the posting address"
              required
            ></textarea>
          </div>
          <div></div>
          <div className="form-group">
            <label
              htmlFor="location2"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              <span className="text-danger">*</span> location
            </label>
            <textarea
              id="location2"
              name="location2"
              value={
                duplicatedLocation != "" && secondLocationVal == ""
                  ? duplicatedLocation
                  : secondLocationVal
              }
              onChange={(event) => {
                handleLocationChange(event);
                handleMainInputChange(event);
                handleSecondLocationChange(event);
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
              placeholder="Please enter the posting address"
              required
            ></textarea>
          </div>
        </div>
      </div>

      <div
        id="extra-details-form"
        className="card card-white bg-white p-4 shadow-md border rounded-lg mt-2"
      >
        <div className="grid gap-6 mb-6 md:grid-cols-4">
          <div className="form-group">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              <span className="text-danger">*</span> Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              name="name"
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-dark-800 dark:text-white text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Please enter the customer name"
              required
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="designation"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Designation
            </label>
            <input
              type="text"
              id="designation"
              value={formData.designation}
              name="designation"
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-dark-800 dark:text-white text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Please enter the designation"
              required
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="mobile_no"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Mobile
            </label>
            <input
              type="text"
              id="mobile_no"
              value={formData.mobile_no}
              name="mobile_no"
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-dark-800 dark:text-white text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Please enter the mobile no"
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-dark-800 dark:text-white text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Please enter the email"
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="adress"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Address
            </label>
            <textarea
              id="address"
              value={formData.address}
              name="address"
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
              placeholder="Please enter the address"
              required
            ></textarea>
          </div>
          <button
            onClick={handleSubmit}
            type="button"
            className="w-10 h-10 rounded-full bg-blue-500 hover:bg-red-500 text-white mt-5"
          >
            +
          </button>
        </div>
      </div>
      <Table data={tableData} handleMainInputChange={handleMainInputChange} />
      <button
        type="button"
        name="Update"
        onClick={handleMainFormSubmit}
        className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
      >
        Update
      </button>
    </Form>
  );
};
