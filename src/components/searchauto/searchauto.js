import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const Searchauto = () => {
  const [data, setData] = useState([]);
  const [inputvalue, setInputvalue] = useState("");
  const [focusinput, setFocusinput] = useState(false);
  const URLdata = "https://restcountries.com/v2/all";
  useEffect(() => {
    const loading = async () => {
      let getdate = await axios.get(URLdata);
      setData(getdate.data);
    };
    loading();
  }, []);
  return (
    <div className="auto">
      <input
        type="text"
        className="col-md-7 p-2"
        value={inputvalue}
        onFocus={() => {
          setFocusinput(true);
        }}
        onBlur={() => {
          setFocusinput(false);
        }}
        onChange={(e) => {
          setInputvalue(e.target.value);
        }}
      />
      <div className="col-md-7 p-2">
        {inputvalue
          ? data
              .filter((ele) => {
                let country = ele.name.toLowerCase();
                return country.includes(inputvalue.toLowerCase());
              })
              .slice(0, 8)
              .map((item, index) => {
                return (
                  <div
                    className="border p-2"
                    key={index}
                    onClick={() => {
                      setInputvalue(item.name);
                    }}
                  >
                    {item.name}
                  </div>
                );
              })
          : focusinput &&
            data.slice(0, 8).map((ele) => {
              return (
                <div
                  className="border p-2"
                  onClick={() => {
                    setInputvalue(ele.name);
                  }}
                >
                  {ele.name}
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Searchauto;
