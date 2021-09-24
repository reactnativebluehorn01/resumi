import React, { useState, useContext, useEffect } from "react";
import { Collapse, Col, Row } from "antd";
import MUIRichTextEditor from "mui-rte";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";

//import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
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

function ExtraCuriActivities() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [showAlert, setshowAlert] = useState(false);
  const btnclass = useStyles();
  const [addActivity, setEdu] = useState([]);
  function callback(key) {
    console.log(key);
  }
  useEffect(() => {
    const dataLocal = JSON.parse(localStorage.getItem("dataLocal"));
    dataLocal &&
      Object.keys(dataLocal.extraCurricularActivity).length > 0 &&
      addExtraActivity();
  }, []);
  const save = (data) => {
    console.log(data);
  };
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
  const { content, updateExtraCurricularActivity, removeFakeData, updateAddSection } =
    useContext(ResumeContext);
  // const [btnText, setBtnText] = useState("Add");
  const panelHeader = (
    <div className="">
      {content.extraCurricularActivity.functionTitle ? (
        <h4 style={{ fontSize: "1rem" }}>
          {content.extraCurricularActivity.functionTitle} at{" "}
          {content.extraCurricularActivity.employer}
        </h4>
      ) : (
        <h4 style={{ fontSize: "1rem" }}>(Not Specified)</h4>
      )}

      {content.extraCurricularActivity.startDate ? (
        <p style={{ marginTop: -10, fontSize: 12, color: "#98A1B3" }}>
          {content.extraCurricularActivity.startDate} -{" "}
          {content.extraCurricularActivity.endDate}
        </p>
      ) : null}
    </div>
  );
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    removeFakeData();
    updateExtraCurricularActivity(data);
    // setBtnText("Update");
  };
  const handleDelete = (delFile) => {
    localStorage.setItem(
      "dataLocal",
      JSON.stringify({ ...content, extraCurricularActivity: {} })
    );
    const newEdu = addActivity.filter((items) => items !== delFile);
    setEdu(newEdu);
    handleClose();
  };
  const handleDelete2 = () => {
    console.log('alert courses');
    setshowAlert(!showAlert);
  }
  const handleDelete3 = () => {
    //  setCoursesFlag(!coursesFlag);
    // onSubmit2({ ...content.addSection, courses: false }); // !coursesFlag

    removeFakeData();
    updateAddSection({ ...content.addSection, activities: false });
    handleDelete2();

  };
  return (
    <div>
      <div className="heading">
        <div className="d-flex align-items-center py-1 Main-title">
          <div>
            <h2 className="MainPoints">Extra Curricular activity </h2>
          </div>
          <div className="mx-1">
            <CreateOutlinedIcon className="pencilIcon-div" />
          </div>
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
            <h4>Delete Courses!</h4>
            <h6>Are you sure you want to delete this record ?</h6>
          </Modal>
        </div>
      </div>
      {addActivity.map((item, index) => (
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
                    <span className={classes.title}> Function Title</span>
                    <TextField
                      id="filled-basic"
                      // label="City"
                      name="functionTitle"
                      variant="filled"
                      defaultValue={
                        content.extraCurricularActivity.functionTitle
                      }
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
                      defaultValue={content.extraCurricularActivity.employer}
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
                          defaultValue={
                            content.extraCurricularActivity.startDate
                          }
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
                          defaultValue={content.extraCurricularActivity.endDate}
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
                      defaultValue={content.extraCurricularActivity.city}
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
                            ...content.extraCurricularActivity,
                            extraCurricularActivity_description: e
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
        onClick={addExtraActivity}
        fullWidth={true}
      >
        Add Activity
      </Button>
    </div>
  );
}

export default ExtraCuriActivities;
