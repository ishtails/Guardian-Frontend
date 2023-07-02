import toast from "react-hot-toast";
import { useFormStore } from "../store/store";
import { useState } from "react";

type Props = {
  label: string;
};

const InputImage = ({ label }: Props) => {
  const formStore = useFormStore();
  const [isInvalid, setIsInvalid] = useState(false);
  const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
  const { formValues } = formStore;

  console.log(formValues);

  const handleInputChange = (fieldName: string, value: any) => {
    if (value) {
      if (!allowedTypes.includes(value.type)) {
        setIsInvalid(true);
        return toast.error("Invalid file type");
        
      }

      if (value.size >= 5 * 1024 * 1024) {
        setIsInvalid(true);
        return toast.error("File size exceeds 5MB limit");
      }

      formStore.setFormField(fieldName, value);
      setIsInvalid(false);
    }
  };

  const inputId = `file_upload_${label.replace(/\s+/g, "_").toLowerCase()}`;

  return (
    <div className="space-y-1">
      <h1 className="text-[#344054] text-p16 font-medium">{label}</h1>
      <label
        htmlFor={inputId}
        className={`${
          isInvalid ? "border-red-300 bg-red-50" : "border-slate-300"
        }
        flex justify-center w-full h-32 px-4 transition bg-white border-2  border-dashed rounded-md appearance-none cursor-pointer hover:border-slate-400 focus:outline-none`}
      >
        <div className="flex flex-col justify-center items-center">
          <span className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-slate-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <span className="font-medium text-gray-600">
              {formValues[inputId] ? (
                <span>{formValues[inputId].name}</span>
              ) : (
                <div>
                  Drop files to Attach, or
                  <span className="text-sky-500 underline ml-1">Browse</span>
                </div>
              )}
            </span>
          </span>
          {formValues[inputId] ? (
            <span className="text-sky-500 ml-1 font-medium mt-2">
              Click to change
            </span>
          ) : (
            <div />
          )}
        </div>
      </label>
      <input
        id={inputId}
        type="file"
        accept="image/*"
        name={inputId}
        className="hidden"
        onChange={(e) => handleInputChange(inputId, e.target.files?.[0])}
      />
    </div>
  );
};

export default InputImage;