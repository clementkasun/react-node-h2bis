// src/components/Table.js
import React from "react";
import { useState } from "react";

const Table = ({ data, handleMainInputChange }) => {
  const [editMode, setEditMode] = useState("");

  // Function to toggle edit mode for a specific row
  const toggleEditMode = (index) => {
    const updatedEditMode = [...editMode];
    updatedEditMode[index] = !editMode[index];
    setEditMode(updatedEditMode);
  };

  return (
    <div className="grid gap-6 mb-6 md:grid-cols-1 mt-2">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table
          className="w-full text-sm text-left text-gray-500 dark:text-gray-400"
          id="comman_table"
        >
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Designation
              </th>
              <th scope="col" className="px-6 py-3">
                Mobile
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data == "" && (
              <tr>
                <td colSpan={6} className="text-center p-5">
                  <b> No Data Found </b>
                </td>
              </tr>
            )}
            {data != "" &&
              data.map((item, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                >
                  <td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {editMode[index] ? (
                        <input
                          type="text"
                          value={item.name}
                          onChange={(e) => handleMainInputChange(e, index)}
                        />
                      ) : (
                        item.name
                      )}
                    </th>
                  </td>
                  <td className="px-6 py-4">
                    {editMode[index] ? (
                      <input
                        type="text"
                        value={item.designation}
                        onChange={(e) => handleMainInputChange(e, index)}
                      />
                    ) : (
                      item.designation
                    )}
                  </td>
                  <td>
                    {editMode[index] ? (
                      <input
                        type="text"
                        value={item.mobile_no}
                        onChange={(e) => handleMainInputChange(e, index)}
                      />
                    ) : (
                      item.mobile_no
                    )}
                  </td>
                  <td>
                    {editMode[index] ? (
                      <input
                        type="text"
                        value={item.email}
                        onChange={(e) => handleMainInputChange(e, index)}
                      />
                    ) : (
                      item.email
                    )}
                  </td>
                  <td>
                    {editMode[index] ? (
                      <input
                        type="text"
                        value={item.address}
                        onChange={(e) => handleMainInputChange(e, index)}
                      />
                    ) : (
                      item.address
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {/* Toggle edit mode button */}
                    <button
                      type="button"
                      className="inline-block rounded m-10 bg-secondary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-secondary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-secondary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-secondary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                      onClick={() => toggleEditMode(index)}
                    >
                      <b> {editMode[index] ? "Save Changes" : "Edit"} </b>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
