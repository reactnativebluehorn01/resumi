import React, { useState, useContext, useEffect } from "react";
import { Collapse, Col, Row } from "antd";
import MUIRichTextEditor from "mui-rte";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";

// import React, { useContext,useState } from "react";
//import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
//import AddIcon from '@material-ui/icons/Add';
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import classes from "./Left.module.css";
import { useForm } from "react-hook-form";
import { ResumeContext } from "../../contexts/ResumeContext";
import TextField from "@material-ui/core/TextField";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { Modal } from "antd";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";

const { Panel } = Collapse;

const useStyles = makeStyles({
  root: {
    color: "#2196F3",
    float: "left",
  },
  label: {
    textTransform: "capitalize",
    // marginRight:'500px' ,
    float: "inline-start",
    justifyContent: "flex-start",
  },
});

function ExtraCuriActivities({ data, id }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const btnclass = useStyles();
  const [addActivity, setEdu] = useState([]);
  useEffect(() => {
    const dataLocal = JSON.parse(localStorage.getItem("dataLocal"));
    dataLocal &&
      Object.keys(dataLocal.addSection).length > 0 &&
      addExtraActivity();
  }, []);
  function callback(key) {
    console.log(key);
  }
  console.log(data, " data ==> id ", id);

  const addExtraActivity = () => {
    setEdu([...addActivity, " "]);
    console.log(addActivity);
  };
  const defaultTheme = createMuiTheme();

  Object.assign(defaultTheme, {
    overrides: {
      MUIRichTextEditor: {
        root: {
          marginLeft: 5,
          marginTop: 10,
          width: "100%",
          backgroundColor: "#F2F5FA",
          borderRadius: "5px",
          padding: "5px",
        },
        editor: {
          overFlow: "wrap",
          minHeight: "200px",
          textIndent: "15px",
        },
      },
    },
  });
  const { content, updateAddSection, removeFakeData } =
    useContext(ResumeContext);

  // const [btnText, setBtnText] = useState("Add");
  const panelHeader = (
    // <div className="">
    //   <h4 style={{ fontSize: "1rem" }}>(Not Specified)</h4>
    //   <p style={{ marginTop: -10, fontSize: 12, color: "#98A1B3" }}>
    //     Mar 2019 - Mar 2021{" "}
    //   </p>
    // </div>

    <div className="">
      {content.addSection.functionTitle ? (
        <h4 style={{ fontSize: "1rem" }}>
          {content.addSection.functionTitle} , {content.addSection.city}
        </h4>
      ) : (
        <h4 style={{ fontSize: "1rem" }}>(Not Specified)</h4>
      )}

      {content.addSection.startDate ? (
        <p style={{ marginTop: -10, fontSize: 12, color: "#98A1B3" }}>
          {content.addSection.startDate} - {content.addSection.endDate}
        </p>
      ) : null}
    </div>
  );
  const { register, handleSubmit } = useForm();
  const onSubmit = (data1) => {
    removeFakeData();
    updateAddSection(data1);
    //updateExtraCurricularActivity(data);
    // setBtnText("Update");
  };
  const handleDelete = (delFile) => {
    localStorage.setItem(
      "dataLocal",
      JSON.stringify({ ...content, addSection: {} })
    );
    const newEdu = addActivity.filter((items) => items !== delFile);
    setEdu(newEdu);
    handleClose();
  };
  return (
    <>
      <div>
        <div className="heading">
          <div className="d-flex align-items-center py-1 Main-title">
            <div className="mt-1 ">
              <h2 className="MainPoints" style={{ paddingLeft: "23px" }}>
                {content.addSection.functionTitle
                  ? content.addSection.functionTitle
                  : "Untitled"}
              </h2>
            </div>
            <div className="mx-1">
              <CreateOutlinedIcon className="pencilIcon-div" />
            </div>
          </div>
        </div>
        {addActivity.map((item, index) => (
          <div className="d-flex ">
            <div
              key={id}
              style={{
                border: "0.5px solid #b3d4fc",
                borderRadius: "5px",
                marginBottom: 10,
                width: "100%",
              }}
            >
              <Collapse
                accordion
                onChange={callback}
                expandIconPosition="right"
                ghost
              >
                <Panel header={panelHeader} key="1">
                  <Row className={classes.rowWidth}>
                    <Col span={11}>
                      <span className={classes.title}> Function Title</span>
                      <TextField
                        id="filled-basic"
                        // label="City"
                        name="functionTitle"
                        variant="filled"
                        defaultValue={content.addSection.functionTitle}
                        inputRef={register}
                        onChange={handleSubmit(onSubmit)}
                        style={{ width: "100%" }}
                      />
                    </Col>
                    <Col span={2}></Col>
                    <Col span={11}>
                      <span className={classes.title}>Employer</span>

                      <TextField
                        id="filled-basic"
                        // label="State"
                        name="employer"
                        variant="filled"
                        defaultValue={content.addSection.employer}
                        inputRef={register}
                        onChange={handleSubmit(onSubmit)}
                        style={{ width: "100%" }}
                      />
                    </Col>
                  </Row>
                  <Row className={classes.rowWidth}>
                    <Col span={11}>
                      <span className={classes.title}>
                        Start & End Date <HelpOutlineIcon fontSize="small" />{" "}
                      </span>
                      <Row>
                        <Col span={11}>
                          {/* <TextField
                            id="filled-basic"
                            name="startDate"
                            variant="filled"
                            defaultValue={content.addSection.startDate}
                            inputRef={register}
                            onChange={handleSubmit(onSubmit)}
                            style={{ width: "100%" }}
                          /> */}
                          <DatePicker
                            dateFormat="MM/yyyy"
                            showMonthYearPicker
                            showFourColumnMonthYearPicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            placeholderText="mm/yy"
                            inputRef={register}
                            className="month"
                          />
                        </Col>
                        <Col span={2}></Col>
                        <Col span={11}>
                          {/* <TextField
                            id="filled-basic"
                            name="endDate"
                            variant="filled"
                            defaultValue={content.addSection.endDate}
                            inputRef={register}
                            onChange={handleSubmit(onSubmit)}
                            style={{ width: "100%" }}
                          />{" "} */}
                          <DatePicker
                            dateFormat="MM/yyyy"
                            showMonthYearPicker
                            showFourColumnMonthYearPicker
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            placeholderText="mm/yy"
                            inputRef={register}
                            className="month"
                          />
                        </Col>
                      </Row>
                    </Col>
                    <Col span={2}></Col>
                    <Col span={11}>
                      <span className={classes.title}>city</span>

                      <TextField
                        id="filled-basic"
                        // label="State"
                        name="city"
                        variant="filled"
                        defaultValue={content.addSection.city}
                        inputRef={register}
                        onChange={handleSubmit(onSubmit)}
                        style={{ width: "100%" }}
                      />
                    </Col>
                  </Row>
                  <Row className={classes.rowWidth}>
                    <Col span={24}>
                      <span
                        className={classes.title}
                        style={{ marginLeft: "10px" }}
                      >
                        Description
                      </span>
                      <MuiThemeProvider theme={defaultTheme}>
                        <MUIRichTextEditor
                          label=" type here ..."
                          // onSave={save}
                          inlineToolbar={true}
                          onChange={(e) =>
                            onSubmit({
                              ...content.addSection,
                              addSection_description: e
                                .getCurrentContent()
                                .getPlainText(),
                            })
                          }
                          controls={[
                            "bold",
                            "italic",
                            "underline",
                            "strikethrough",
                            "numberList",
                            "bulletList",
                            "spellcheck",
                          ]}
                        />
                      </MuiThemeProvider>
                    </Col>
                  </Row>
                </Panel>
              </Collapse>
            </div>
            <div>
              <DeleteOutlineOutlinedIcon
                onClick={handleShow}
                className="pencilIcon-div "
              />
            </div>
            <Modal
              // title="Vertically centered modal dialog"
              centered
              visible={show}
              okText="Delete"
              onOk={() => handleDelete(item)}
              onCancel={handleClose}
            >
              <h4>Delete Entry</h4>
              <h6>Are you sure you want to delete entry?</h6>
            </Modal>
          </div>
        ))}
      </div>
    </>
  );
}

export default ExtraCuriActivities;
