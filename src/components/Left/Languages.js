import React, { useState, useContext } from 'react';
import { Collapse, Col, Row, Select } from 'antd';

// import React, { useContext,useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
//import InputLabel from '@material-ui/core/InputLabel';
//import MenuItem from '@material-ui/core/MenuItem';
//import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import NativeSelect from '@material-ui/core/NativeSelect';




import AddIcon from '@material-ui/icons/Add';
import classes from "./Left.module.css";
import { useForm } from "react-hook-form";
import { ResumeContext } from "../../contexts/ResumeContext";
import TextField from "@material-ui/core/TextField";
//import { createMuiTheme } from '@material-ui/core/styles'

const { Option } = Select;

const { Panel } = Collapse;
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
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
}));

function Languages() {

  //const [age, setAge] = React.useState('');
  const btnclass = useStyles();
  const [addEdu, setEdu] = useState([]);
  // const [state1, setState1] = useState({
  //   age: '',
  //   name: 'hai',
  // });
  function callback(key) {
    console.log(key);
  }
  // const save = (data) => {
  //   console.log(data);
  // };
  const addLanguage = () => {
    setEdu([...addEdu, ' ']);
    console.log(addEdu);
  }

  const { content, updateLanguagesData, removeFakeData } = useContext(
    ResumeContext
  );
  // const [btnText, setBtnText] = useState("Add");
  const panelHeader = (<div className='' >
    <h4>(Not Specified)</h4>
    <p style={{ marginTop: -10, fontSize: 12, color: '#98A1B3' }}>Mar 2019 - Mar 2021 </p>
  </div>)
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    removeFakeData();
    updateLanguagesData(data);
    // setBtnText("Update");
  };
  // const handleChange = (event) => {
  //   console.log('event ==> ', event)
  //   // const name = event.target.value;
  //   // setState1({
  //   //   ...state1,
  //   //   [name]: event.target.value,
  //   // });
  // };
  return (
    <div>
      <div className='heading'>
        <div className="d-flex align-items-center py-1 Main-title">
          <div>
            <DragIndicatorIcon className="pencilIcon-div" />
          </div>
          <div>
            <h2 className='MainPoints'>Languages</h2>
          </div>
          <div className="mx-1">
            <CreateOutlinedIcon className="pencilIcon-div" />
          </div>
        </div>
      </div>
      {addEdu.map((item, index) => (
        <div key={index} style={{ border: '0.5px solid #b3d4fc', borderRadius: '5px', marginBottom: 10 }}>

          <Collapse accordion
            onChange={callback}
            expandIconPosition='right'
            ghost
          >
            <Panel header={panelHeader} key='1'>
              <Row className={classes.rowWidth}>

                <Col span={11}>
                  <span className={classes.title}>Language</span>
                  <TextField
                    id="filled-basic"
                    // label="City"
                    name="language"
                    variant="filled"
                    defaultValue={content.languages.language}
                    inputRef={register}
                    onChange={handleSubmit(onSubmit)}
                    style={{ width: '100%' }}
                  />
                </Col>
                <Col span={2}></Col>
                <Col span={11}>
                  <div className={classes.title}>Level</div>

                  {/* <Radio.Group value={size} onChange={handleSizeChange}>
                                    <Radio.Button value="large">Large</Radio.Button>
                                    <Radio.Button value="default">Default</Radio.Button>
                                    <Radio.Button value="small">Small</Radio.Button>
                                    </Radio.Group> */}

                  <Select size='large' defaultValue="Select Level"
                    // onChange={handleChange}
                    onChange={(e) => onSubmit({ ...content.languages, 'languages_level': e })}

                    style={{ width: 200 }}>
                    <Option key={'Native Speaker'}>Native Speaker</Option>

                    <Option key={'Very Good Command'}>Very Good Command </Option>
                    <Option key={'Good Working Knowledge'}>Good Working Knowledge</Option>

                  </Select>
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
        onClick={addLanguage}
        fullWidth={true}
      >
        Add Language
      </Button>

    </div>
  );
}

export default Languages;