import React, { useState, useContext, useEffect } from "react";
import { Collapse, Col, Row } from "antd";
import MUIRichTextEditor from "mui-rte";
//import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";

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
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
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

function Internship() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showAlert, setshowAlert] = useState(false);

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const btnclass = useStyles();
  const [addEdu, setEdu] = useState([]);
  function callback(key) {
    console.log(key);
  }
  useEffect(() => {
    const dataLocal = JSON.parse(localStorage.getItem("dataLocal"));
    dataLocal &&
      Object.keys(dataLocal.intrenship).length > 0 &&
      addEmploymentHistory();
  }, []);
  const save = (data) => {
    console.log(data);
  };
  const addEmploymentHistory = () => {
    setEdu([...addEdu, " "]);
    console.log(addEdu);
  };
  const handleDelete2 = () => {
    console.log('alert courses');
    setshowAlert(!showAlert);
  }
  const handleDelete3 = () => {
    //  setCoursesFlag(!coursesFlag);
    // onSubmit2({ ...content.addSection, courses: false }); // !coursesFlag

    removeFakeData();
    updateAddSection({ ...content.addSection, internship: false });
    handleDelete2();

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
  const { content, updateIntrenshipData, removeFakeData,updateAddSection } =
    useContext(ResumeContext);
  // const [btnText, setBtnText] = useState("Add");
  const panelHeader = (
    <div className="">
      {content.intrenship.jobTitle ? (
        <h4 style={{ fontSize: "1rem" }}>
          {content.intrenship.jobTitle} at {content.intrenship.employer}
        </h4>
      ) : (
        <h4 style={{ fontSize: "1rem" }}>(Not Specified)</h4>
      )}

      {content.courses.startDate ? (
        <p style={{ marginTop: -10, fontSize: 12, color: "#98A1B3" }}>
          {content.intrenship.startDate} - {content.intrenship.endDate}
        </p>
      ) : null}
    </div>
  );
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    removeFakeData();
    updateIntrenshipData(data);
    // setBtnText("Update");
  };
  const handleDelete = (delFile) => {
    localStorage.setItem(
      "dataLocal",
      JSON.stringify({ ...content, intrenship: {} })
    );
    const newEdu = addEdu.filter((items) => items !== delFile);
    setEdu(newEdu);
    handleClose();
  };
  return (
    <div>
      <div className="heading">
        <div className="d-flex align-items-center py-1 Main-title">
          <div>
            <h2 className="MainPoints">Intrenship </h2>
          </div>
          <div className="mx-1">
            <CreateOutlinedIcon className="pencilIcon-div" />
            <DeleteOutlineOutlinedIcon
              onClick={handleDelete2}
              className="pencilIcon-div mt-4"
            />
            <Modal
              // title="Vertically centered modal dialog"
              centered
              visible={showAlert}
              onOk={handleDelete3}
              onCancel={() => setshowAlert(false)}
            >
              <h4>Delete InternShip!</h4>
              <h6>Are you sure you want to delete this record ?</h6>
            </Modal>
          </div>
        </div>
      </div>
      {addEdu.map((item, index) => (
        <div className="d-flex ">
          <div
            key={index}
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
                    <span className={classes.title}> Job title</span>
                    <TextField
                      id="filled-basic"
                      // label="City"
                      name="jobTitle"
                      variant="filled"
                      defaultValue={content.intrenship.jobTitle}
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
                      defaultValue={content.intrenship.employer}
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
                          name="startDate"
                          variant="filled"
                          defaultValue={content.intrenship.startDate}
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
                        {/* <TextField
                          id="filled-basic"
                          // label="City"
                          name="endDate"
                          variant="filled"
                          defaultValue={content.intrenship.endDate}
                          inputRef={register}
                          onChange={handleSubmit(onSubmit)}
                          style={{ width: "100%" }}
                        />{" "} */}
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
                      defaultValue={content.intrenship.city}
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
                            ...content.intrenship,
                            intrenship_description: e
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
        Add Internship
      </Button>
    </div>
  );
}

export default Internship;
