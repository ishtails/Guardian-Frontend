import { useState } from "react";
import search from "../assets/icons/search.svg";
import axios from "axios";

type item = {
  hostel: string;
  mobile: number;
  name: string;
  room: number;
  username: string;
};

const Searchbar = (props: { isMobile: boolean }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownItems, setDropdownItems] = useState<item[]>([]);

  const filterDropdown = async (e) => {
    console.log(e.target.value);
    e.preventDefault;
    setSearchTerm(e.target.value);
    const result = await axios.get("/search", { params: { key: searchTerm } });
    console.log(result.data);
    setDropdownItems(result.data);
  };

  console.log(dropdownItems);

  // const filteredItems = dropdownItems.filter((item) =>
  // {console.log(item)}
  // );

  return (
    <div className="relative">
      <form
        className={`flex ${
          props.isMobile ? "bg-white" : "bg-slate-50"
        } border border-slate-300 text-slate-900 text-sm rounded-lg hover:border-sky-500 px-3 w-auto`}
      >
        <input
          className={`focus:outline-none ${
            props.isMobile ? "w-32 h-8 bg-white" : "bg-slate-50"
          }`}
          placeholder="Search"
          value={searchTerm}
          onChange={filterDropdown}
        />
        <img
          src={search}
          alt="Search"
          className="cursor-pointer inset-x-44 inset-y-2"
        />
      </form>
      <div className="absolute mt-2 bg-white border border-gray-300 rounded-lg">
        {dropdownItems.map((item) => {
          console.log(item.username);
          return (
            <a
              key={item.username}
              href={`/${item.username}`}
              className="block px-4 py-2 hover:bg-gray-100 text-[14px]"
            >
              {item.name}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Searchbar;
