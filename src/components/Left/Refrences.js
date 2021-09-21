import React, { useState, useContext } from 'react';
import { Collapse, Col, Row } from 'antd';
//import MUIRichTextEditor from "mui-rte";

import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
//import FormGroup from '@material-ui/core/FormGroup';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// import React, { useContext,useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
//import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import classes from "./Left.module.css";
import { useForm } from "react-hook-form";
import { ResumeContext } from "../../contexts/ResumeContext";
import TextField from "@material-ui/core/TextField";
import { createMuiTheme } from '@material-ui/core/styles'



const { Panel } = Collapse;

const useStyles = makeStyles({
  root: {
    color: '#2196F3',
    float: 'left'
  },
  label: {
    textTransform: 'capitalize',
    // marginRight:'500px' ,
    float: 'inline-start',
    justifyContent: "flex-start"
  },
});
const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    '&$checked': {
      transform: 'translateX(12px)',
      color: theme.palette.common.white,
      '& + $track': {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: 'none',
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

  const [state, setState] = React.useState({ checkedC: true });
  const handleSwitchChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const btnclass = useStyles();
  const [addActivity, setEdu] = useState([]);
  function callback(key) {
    console.log(key);
  }
  // const save = (data) => {
  //   console.log(data);
  // };
  const addExtraActivity = () => {
    setEdu([...addActivity, ' ']);
    console.log(addActivity);
  }
  const defaultTheme = createMuiTheme()

  Object.assign(defaultTheme, {
    overrides: {
      MUIRichTextEditor: {
        root: {
          marginLeft: 5,
          marginTop: 10,
          width: "100%",
          backgroundColor: '#F2F5FA',
          borderRadius: '5px',
          padding: '5px'
        },
        editor: {
          overFlow: 'wrap',
          minHeight: '200px',
          textIndent: '15px'
        }
      }
    }
  })
  const { content, updateRefrencesData, removeFakeData } = useContext(
    ResumeContext
  );
  const panelHeader = (<div className='' >
    <h4>(Not Specified)</h4>
    <p style={{ marginTop: -10, fontSize: 12, color: '#98A1B3' }}>Mar 2019 - Mar 2021 </p>
  </div>)
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    removeFakeData();
    updateRefrencesData(data);
  };
  return (
    <div>
      <div className='heading'>
        <div className="d-flex align-items-center py-1 Main-title">
          <div>
            <DragIndicatorIcon className="pencilIcon-div" />
          </div>
          <div>
            <h2 className='MainPoints'>Refrences </h2>
          </div>
          <div className="mx-1">
            <CreateOutlinedIcon className="pencilIcon-div" />
          </div>
        </div>
      </div>

      <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>
            <AntSwitch checked={state.checkedC} onChange={handleSwitchChange} name="checkedC" />
          </Grid>
          <Grid item>I'd like to hide references and make them available only upon request</Grid>
        </Grid>
      </Typography>

      {addActivity.map((item, index) => (
        <div key={index} style={{ border: '0.5px solid #b3d4fc', borderRadius: '5px', marginBottom: 10 }}>

          <Collapse accordion
            onChange={callback}
            expandIconPosition='right'
            ghost
          >
            <Panel header={panelHeader} key='1'>
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
                    style={{ width: '100%' }}
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
                    style={{ width: '100%' }}
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
                    style={{ width: '100%' }}
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
                    style={{ width: '100%' }}

                  />
                </Col>
              </Row>

            </Panel>
          </Collapse>
        </div>
      )
      )}

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