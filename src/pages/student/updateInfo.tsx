import update from "../../assets/illustrations/updateInfo.svg";
import AuthUI from "../../components/AuthUI";
import { Link } from "react-router-dom";
import InputField from "../../components/InputField";
import {useDropzone} from 'react-dropzone'
import React, {useCallback, useState} from 'react'
import Dropzone from 'react-dropzone'

const loginForm = () => ( 
  <div className="flex flex-col space-y-4">
    {/* Header */}
    <div className="">
      <span className="font-lexend font-bold text-h36 sm:text-h32">
        Update Profile
      </span>
      <p className="text-[#667085] text-h16 sm:text-h14">Change your information below</p>
    </div>

    {/* Input Fields */}
    <InputField
      label="Full Name"
      placeholder=""
      isPassword={false}
    />
    <InputField
      label="Phone"
      placeholder=""
      isPassword={false}
    />
    <InputField
      label="Hostel"
      placeholder=""
      isPassword={false}
    />
    <InputField
      label="Room"
      placeholder=""
      isPassword={false}
    />
    
    <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
      {({getRootProps, getInputProps}) => (
        <section>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <InputField
              label="Identity Card"
              placeholder="Select Image"
              isPassword={false}
            />
            <p className="text-[10px]">Drag and drop file here, or click to select a file</p>
          </div>
        </section>
      )}
    </Dropzone>
  {/* <div>
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
  </div> */}
    {/* Submit Button */}
    <div className="pt-1">
      <button className="text-white text-h16 bg-[#0EA5E9] w-full p-2 rounded-lg hover:bg-sky-400 transition-all font-semibold">
        Submit
      </button>
    </div>

    {/* Footer */}
    <Link
      to="/student/home"
      className="text-[#0EA5E9] font-medium hover:text-sky-600 transition hover:underline underline-offset-1 self-center"
    >
      Back to Home
    </Link>
  </div>
);

const updateInfo = () => {
  // const [idCard, setIdCard] = useState([]);
  const onDrop = (acceptedFiles) => {
    console.log(acceptedFiles);
  };

  // const {getRootProps, getInputProps} = useDropzone({onDrop})

  return (
    <AuthUI
      InputField={loginForm}
      illustration_1={update}
      illustration_2={update}
    />
  );
};

export default updateInfo;