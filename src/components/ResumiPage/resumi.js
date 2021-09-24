import React from "react";
import { BsChevronLeft, BsFillCircleFill, BsThreeDots } from "react-icons/bs";
//import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { AiFillFileText } from "react-icons/ai";
import Paper from "../Right/Paper/Paper";
function resumi() {
  return (
    <div>
      <div className="d-xl-none d-block">
      <button
        type="button"
        className="btnDiv fixed-bottom "
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <b> Preview & Download</b>
          <AiFillFileText className="fixButton" />{" "}
      </button>
      </div>

      <div
        style={{ overflowY: "hidden", overflowX: "hidden" }}
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className=" modal-dialog modal-fullscreen">
          <div className="modal-content">
            <nav className="navbar navbar-expand-md  bg-black">
              <div className="container-fluid">
                <a className=" text-white" href="/basic/header">
                  <b>
                    {" "}
                    <BsChevronLeft /> Back to editor
                  </b>
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
                    <li className="nav-item mt-2">
                      <a
                        style={{ fontSize: "1.2rem" }}
                        className="nav-link active text-white"
                        aria-current="page"
                        href="#"
                      >
                        <AiOutlineMinus /> Aa <AiOutlinePlus />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        style={{ fontSize: "1.5rem" }}
                        className="nav-link text-white"
                        href="#"
                      >
                        |
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        style={{ fontSize: "1.7rem" }}
                        className="nav-link text-white"
                        href="#"
                      >
                        <BsFillCircleFill />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        style={{ fontSize: "1.7rem" }}
                        className="nav-link text-info"
                        href="#"
                      >
                        <BsFillCircleFill />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        style={{ fontSize: "1.7rem" }}
                        className="nav-link text-danger"
                        href="#"
                      >
                        <BsFillCircleFill />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        style={{ fontSize: "1.7rem" }}
                        className="nav-link text-success"
                        href="#"
                      >
                        <BsFillCircleFill />
                      </a>
                    </li>
                  </ul>
                  <div className="d-flex">
                    <button
                      style={{
                        color: "white",
                        backgroundColor: "#3498db",
                        padding: "5px 10px",
                        border: "none",
                        borderRadius: "5px",
                      }}
                      type="button"
                    >
                      Download PDF
                    </button>
                    <button
                      style={{
                        color: "white",
                        backgroundColor: "#3498db",
                        padding: "5px 10px ",
                        border: "none",
                        borderRadius: "5px",
                      }}
                      className="mx-3"
                      type="button"
                    >
                      <BsThreeDots />
                    </button>
                  </div>
                </div>
              </div>
            </nav>
            <div
              className="container-fluid"
              style={{ backgroundColor: "#4F5259" }}
            >
              <div className="row" style={{ padding: "0px 10px" }}>
                <div className="col-3 leftSide">
                  <div>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmFMZHUNGhv5ijxun-v9tGmH-DzU3VGP7-8g&usqp=CAU"
                      alt="img  "
                    />
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmFMZHUNGhv5ijxun-v9tGmH-DzU3VGP7-8g&usqp=CAU"
                      alt="img  "
                    />
                  </div>
                  <div></div>
                  <div>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmFMZHUNGhv5ijxun-v9tGmH-DzU3VGP7-8g&usqp=CAU"
                      alt="img  "
                    />
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmFMZHUNGhv5ijxun-v9tGmH-DzU3VGP7-8g&usqp=CAU"
                      alt="img  "
                    />
                  </div>
                  <div>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmFMZHUNGhv5ijxun-v9tGmH-DzU3VGP7-8g&usqp=CAU"
                      alt="img  "
                    />
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmFMZHUNGhv5ijxun-v9tGmH-DzU3VGP7-8g&usqp=CAU"
                      alt="img  "
                    />
                  </div>
                  <div></div>
                  <div>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmFMZHUNGhv5ijxun-v9tGmH-DzU3VGP7-8g&usqp=CAU"
                      alt="img  "
                    />
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmFMZHUNGhv5ijxun-v9tGmH-DzU3VGP7-8g&usqp=CAU"
                      alt="img  "
                    />
                  </div>
                  <div>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmFMZHUNGhv5ijxun-v9tGmH-DzU3VGP7-8g&usqp=CAU"
                      alt="img  "
                    />
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmFMZHUNGhv5ijxun-v9tGmH-DzU3VGP7-8g&usqp=CAU"
                      alt="img  "
                    />
                  </div>
                  <div></div>
                  <div>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmFMZHUNGhv5ijxun-v9tGmH-DzU3VGP7-8g&usqp=CAU"
                      alt="img  "
                    />
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmFMZHUNGhv5ijxun-v9tGmH-DzU3VGP7-8g&usqp=CAU"
                      alt="img  "
                    />
                  </div>
                  <div>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmFMZHUNGhv5ijxun-v9tGmH-DzU3VGP7-8g&usqp=CAU"
                      alt="img  "
                    />
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmFMZHUNGhv5ijxun-v9tGmH-DzU3VGP7-8g&usqp=CAU"
                      alt="img  "
                    />
                  </div>
                  <div></div>
                  <div>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmFMZHUNGhv5ijxun-v9tGmH-DzU3VGP7-8g&usqp=CAU"
                      alt="img  "
                    />
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmFMZHUNGhv5ijxun-v9tGmH-DzU3VGP7-8g&usqp=CAU"
                      alt="img  "
                    />
                  </div>
                  <div>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmFMZHUNGhv5ijxun-v9tGmH-DzU3VGP7-8g&usqp=CAU"
                      alt="img  "
                    />
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmFMZHUNGhv5ijxun-v9tGmH-DzU3VGP7-8g&usqp=CAU"
                      alt="img  "
                    />
                  </div>
                  <div></div>
                  <div>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmFMZHUNGhv5ijxun-v9tGmH-DzU3VGP7-8g&usqp=CAU"
                      alt="img  "
                    />
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmFMZHUNGhv5ijxun-v9tGmH-DzU3VGP7-8g&usqp=CAU"
                      alt="img  "
                    />
                  </div>
                </div>
                <div className="col-9 d-flex justify-content-center rightSide p-5">
                  <div className="paperPage">
                    <Paper />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default resumi;
