import React, { useState, useContext, useEffect } from "react";
import { Collapse, Col, Row } from "antd";
import MUIRichTextEditor from "mui-rte";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
// import React, { useContext,useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import classes from "./Left.module.css";
import { useForm } from "react-hook-form";
import { ResumeContext } from "../../contexts/ResumeContext";
import TextField from "@material-ui/core/TextField";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { Modal } from "antd";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

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

function EmploymentHistory() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const btnclass = useStyles();
  const [addEdu, setEdu] = useState([]);
  useEffect(() => {
    const dataLocal = JSON.parse(localStorage.getItem("dataLocal"));
    dataLocal &&
      Object.keys(dataLocal.professional2).length > 0 &&
      addEmploymentHistory();
  }, []);

  function callback(key) {
    console.log(key);
  }

  const addEmploymentHistory = () => {
    setEdu([...addEdu, " "]);
    console.log(addEdu);
  };
  const defaultTheme = createMuiTheme();
  const handleDelete = (delFile) => {
    localStorage.setItem(
      "dataLocal",
      JSON.stringify({ ...content, professional2: {} })
    );
    const newEdu = addEdu.filter((items) => items !== delFile);
    setEdu(newEdu);
    handleClose()
  };
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
  const { content, updateProfessionalData2, removeFakeData } =
    useContext(ResumeContext);
  // const [btnText, setBtnText] = useState("Add");
  const panelHeader = (
    <div className="">
      {content.professional2.jobTitle ? (
        <h4 style={{ fontSize: "1rem" }}>
          {content.professional2.jobTitle} at {content.professional2.employer}
        </h4>
      ) : (
        <h4 style={{ fontSize: "1rem" }}>(Not Specified)</h4>
      )}

      {content.professional2.date1 ? (
        <p style={{ marginTop: -10, fontSize: 12, color: "#98A1B3" }}>
          {content.professional2.date1} - {content.professional2.date2}
        </p>
      ) : null}
    </div>
  );
  const { register, handleSubmit } = useForm();
  const save = (data) => {
    // console.log(data);
    removeFakeData();
    updateProfessionalData2(data);
  };

  const onSubmit = (data) => {
    removeFakeData();
    updateProfessionalData2(data);
    // setBtnText("Update");
  };
  return (
    <div>
      <div className="heading">
        <div className="d-flex align-items-center py-1 Main-title">
          <div>
            <h2 className="MainPoints">Employment History </h2>
          </div>
          <div className="mx-1">
            {" "}
            <CreateOutlinedIcon className="pencilIcon-div" />
          </div>
        </div>
        <p style={{ marginTop: -5, fontSize: 14, color: "#98A1B3" }}>
          Include your 10 years of relevant experience and date in this section.
          List Your most recent position here.
        </p>
      </div>
      {addEdu.map((item, index) => (
        <div className="d-flex Main-title">
          <div>
            <DragIndicatorIcon className="pencilIcon-div mt-4" />
          </div>
          <div className="w-100">
            <div
              key={index}
              style={{
                border: "0.5px solid #b3d4fc",
                borderRadius: "5px",
                marginBottom: 10,
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
                      <span className={classes.title}> Job title</span>
                      <TextField
                        id="filled-basic"
                        // label="City"
                        name="jobTitle"
                        variant="filled"
                        defaultValue={content.professional2.jobTitle}
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
                        defaultValue={content.professional2.employer}
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
                            // label="City"
                            name="date1"
                            variant="filled"
                            defaultValue={content.professional2.date1}
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
                            // label="City"
                            name="date2"
                            variant="filled"
                            defaultValue={content.professional2.date2}
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
                        defaultValue={content.professional2.city}
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
                          //    let plainText = d.getCurrentContent().getPlainText();
                          onChange={(e) =>
                            save({
                              ...content.professional2,
                              professionalDesription: e
                                .getCurrentContent()
                                .getPlainText(),
                            })
                          }
                          inlineToolbar={true}
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
                <div></div>
              </Collapse>
            </div>
          </div>
          <div>
            <DeleteOutlineOutlinedIcon
              onClick={handleShow}
              // onClick={() => handleDelete(item)}
              className="pencilIcon-div mt-4"
            />
          </div>
          <Modal
            // title="Vertically centered modal dialog"
            centered
            visible={show}
            onOk={() => handleDelete(item)}
            onCancel={handleClose}
          >
            <h4>Delete Entry</h4>
            <h6>Are you sure you want to delete entry?</h6>
          </Modal>
        </div>
      ))}
      <Button
        classes={{
          root: btnclass.root,
          label: btnclass.label,
        }}
        startIcon={<AddIcon />}
        onClick={addEmploymentHistory}
        fullWidth={true}
      >
        Add employment
      </Button>
    </div>
  );
}

export default EmploymentHistory;
