import React, { useState, useContext, useEffect } from "react";
import { Collapse, Col, Row } from "antd";
//import MUIRichTextEditor from "mui-rte";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";

import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
//import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
//import FormGroup from '@material-ui/core/FormGroup';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// import React, { useContext,useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
//import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import classes from "./Left.module.css";
import { useForm } from "react-hook-form";
import { ResumeContext } from "../../contexts/ResumeContext";
import TextField from "@material-ui/core/TextField";
import { createMuiTheme } from "@material-ui/core/styles";
import { Modal } from "antd";

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
const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    "&$checked": {
      transform: "translateX(12px)",
      color: theme.palette.common.white,
      "& + $track": {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: "none",
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);

function Refrences() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showAlert, setshowAlert] = useState(false);

  const [state, setState] = React.useState({ checkedC: true });
  const handleSwitchChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  useEffect(() => {
    const dataLocal = JSON.parse(localStorage.getItem("dataLocal"));
    dataLocal &&
      Object.keys(dataLocal.refrences).length > 0 &&
      addExtraActivity();
  }, []);
  const btnclass = useStyles();
  const [addActivity, setEdu] = useState([]);
  function callback(key) {
    console.log(key);
  }
  // const save = (data) => {
  //   console.log(data);
  // };
  const addExtraActivity = () => {
    setEdu([...addActivity, " "]);
    console.log(addActivity);
  };
  const handleDelete2 = () => {
    console.log('alert courses');
    setshowAlert(!showAlert);
  }
  const handleDelete3 = () => {
    //  setCoursesFlag(!coursesFlag);
    // onSubmit2({ ...content.addSection, courses: false }); // !coursesFlag

    removeFakeData();
    updateAddSection({ ...content.addSection, refrences: false });
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
  const { content, updateRefrencesData, removeFakeData ,updateAddSection} =
    useContext(ResumeContext);
  const panelHeader = (
    <div className="">
      {content.refrences.referent ? (
        <h4 style={{ fontSize: "1rem" }}>{content.refrences.referent}</h4>
      ) : (
        <h4 style={{ fontSize: "1rem" }}>(Not Specified)</h4>
      )}

      {content.refrences.company ? (
        <p style={{ marginTop: -10, fontSize: 12, color: "#98A1B3" }}>
          {content.refrences.company}
        </p>
      ) : null}
    </div>
  );
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    removeFakeData();
    updateRefrencesData(data);
  };
  const handleDelete = (delFile) => {
    localStorage.setItem(
      "dataLocal",
      JSON.stringify({ ...content, refrences: {} })
    );
    const newEdu = addActivity.filter((items) => items !== delFile);
    setEdu(newEdu);
    handleClose();
  };
  return (
    <div>
      <div className="heading">
        <div className="d-flex align-items-center py-1 Main-title">
          <div>
            <h2 className="MainPoints">Refrences </h2>
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
              <h4>Delete Refrence!</h4>
              <h6>Are you sure you want to delete this record ?</h6>
            </Modal>
          </div>
        </div>
      </div>

      <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>
            <AntSwitch
              checked={state.checkedC}
              onChange={handleSwitchChange}
              name="checkedC"
            />
          </Grid>
          <Grid item>
            I'd like to hide references and make them available only upon
            request
          </Grid>
        </Grid>
      </Typography>

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
                    <span className={classes.title}> Referent's Full Name</span>
                    <TextField
                      id="filled-basic"
                      // label="City"
                      name="referent"
                      variant="filled"
                      defaultValue={content.refrences.referent}
                      inputRef={register}
                      onChange={handleSubmit(onSubmit)}
                      style={{ width: "100%" }}
                    />
                  </Col>
                  <Col span={2}></Col>
                  <Col span={11}>
                    <span className={classes.title}>Company</span>

                    <TextField
                      id="filled-basic"
                      // label="State"
                      name="company"
                      variant="filled"
                      defaultValue={content.refrences.company}
                      inputRef={register}
                      onChange={handleSubmit(onSubmit)}
                      style={{ width: "100%" }}
                    />
                  </Col>
                </Row>
                <Row className={classes.rowWidth}>
                  <Col span={11}>
                    <span className={classes.title}>Phone</span>
                    <TextField
                      id="filled-basic"
                      // label="City"
                      name="phone"
                      variant="filled"
                      defaultValue={content.refrences.phone}
                      inputRef={register}
                      onChange={handleSubmit(onSubmit)}
                      style={{ width: "100%" }}
                    />
                  </Col>
                  <Col span={2}></Col>
                  <Col span={11}>
                    <span className={classes.title}>Email</span>

                    <TextField
                      id="filled-basic"
                      // label="State"
                      name="email"
                      variant="filled"
                      defaultValue={content.refrences.email}
                      inputRef={register}
                      onChange={handleSubmit(onSubmit)}
                      style={{ width: "100%" }}
                    />
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
        Add Refrence
      </Button>
    </div>
  );
}

export default Refrences;
