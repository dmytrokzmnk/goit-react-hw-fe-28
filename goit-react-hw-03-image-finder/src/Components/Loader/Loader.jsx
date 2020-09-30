import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Downloader from "react-loader-spinner";
const Loader = () => (
  <Downloader
    type="Bars"
    height={100}
    width={100}
    color="#3f51b5"
    style={{ marginTop: "20em" }}
  />
);

export default Loader;
