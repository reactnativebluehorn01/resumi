import React, { useContext, useState } from "react";
import TextField from "@material-ui/core/TextField";
//import Button from "@material-ui/core/Button";
import classes from "./Left.module.css";
import { useForm } from "react-hook-form";
import { ResumeContext } from "../../contexts/ResumeContext";
import { Col, Row, Upload } from 'antd';//Progress
import ProgressBar from "@ramonak/react-progress-bar";
//import lockImage from '../../assets/lock.png';
import { makeStyles } from '@material-ui/core/styles';
import HelpIcon from '@material-ui/icons/Help';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
//import moment from "moment";
//import MyTemplate from '../template/PdfToHtml';
// Import Component 
//import ProfessionalSummary from './ProfessionalSummary';
import EducationNew from './EducationNew';
import EmploymentHistory from './EmploymentHistory';
import SocialLinks from './SocialLinks';
import Courses from './Courses';
import ExtraCuriActivities from './ExtraCuriActivities';
import Hobbies from './Hobbies';
import Languages from './Languages';
import Refrences from './Refrences';
import Internship from './Internship';
//import AddSection from './AddSection';
import AddSection from './Section2';
import Skill from './Skills';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { createTheme, MuiThemeProvider } from '@material-ui/core/styles'

import MUIRichTextEditor from "mui-rte";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import AddCircle from "@material-ui/icons/AddCircle";

//import AddIcon from "@mui/icons-material/Add";

//import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

//const { RangePicker } = DatePicker;
// const { Panel } = Collapse;
const useStyles = makeStyles((theme) => ({
  fontSizeSmall: {
    color: '#25B869',
  },
  root: {
    position: 'relative',
  },
  dropdown: {
    position: 'absolute',
    top: 28,
    right: 0,
    left: 0,
    zIndex: 1,
    border: '1px solid',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));

const defaultTheme = createTheme()

Object.assign(defaultTheme, {
  overrides: {
    MUIRichTextEditor: {
      root: {
        marginTop: -10,
        maxwidth: "100%",
        backgroundColor: '#F2F5FA',
        borderRadius: '5px',
        padding: '8px'
      },
      editor: {
        overFlow: 'wrap',
        minHeight: '200px',
        textIndent: '15px'

      }
    }
  }
});


function Header() {

  const iconClass = useStyles();
  const [displaySugession, setSuggesion] = useState(false);
  const { content, updateHeaderData, removeFakeData, updateProfessionalData } = useContext(
    ResumeContext
  );
  const [btnDisplay, setBtnDisplay] = useState(true);
  const [btnHide, setBtnHide] = useState(false);
  const { register, handleSubmit } = useForm();


  const onSubmit = (data) => {
    console.log('sample data==> ', data)
    removeFakeData();
    updateHeaderData(data);
  };
  const save = (d) => {
    let plainText = d.getCurrentContent().getPlainText();

    // const { target: { value } } = d;
    // console.log('d----=--=>', plainText)
    onSubmit2({ professionalSummer: plainText });
  }
  const onSubmit2 = (data) => {

    removeFakeData();
    updateProfessionalData(data);
  };






  const handleDisplayClick = () => {
    setBtnDisplay(false)
    setBtnHide(true)
  }
  const handleHideClick = () => {
    setBtnDisplay(true)
    setBtnHide(false)
  };
  const handleDisplaySuggestion = () => {
    setSuggesion(!displaySugession)
  }
  const handleClickAway = () => {
    setSuggesion(false)
  }

  // const disabledDate = (current) => {

  //   // let customDate = "2018-11-25";
  //   // return current && current > moment(customDate, "YYYY-MM-DD");
  //   return current && current > moment().subtract(18, "years")
  // }

  return (
    <div className="" >
      <div className={classes.suggestion}>
        <Row>
          <Col span={16}>
            <span style={{ color: "#98A1B4" }}> <b style={{ color: "#FFBA19", paddingRight: 10 }}>53% </b>Profile completeness</span>
          </Col>
          <Col span={6}>
            <span style={{ color: "#98A1B4" }}> <b className={classes.profileSummary}>+10%</b> Add profile summary
            </span>
          </Col>
          <Col>
            <div className={classes.suggestionIcon}>

              <ClickAwayListener onClickAway={handleClickAway}>
                <span className={iconClass.fontSizeSmall}><HelpIcon fontSize='small' onClick={handleDisplaySuggestion} /> </span>
              </ClickAwayListener>

            </div>
          </Col>

        </Row>
        <div style={{ alignSelf: 'center', width: '99%' }}  >

          <ProgressBar
            height='4px'
            // width="80%"
            completed={73}
            isLabelVisible={false}
            bgColor='rgb(37 184 98)'
          />
        </div>
        {/* <Progress
          percent={53}
          strokeColor={{
            '0%': '#108ee9',
            '100%': '#87d068',
          }}
        /> */}

        {displaySugession && (
          <div className={classes.suggestionInfo}>

            <Row className={classes.suggestionInfoRow}>
              <Col span={10}> <span style={{ color: "#98A1B4", cursor: "pointer" }}> <b style={{ color: "#25B869", paddingRight: 10 }}>+4% </b>Add extra-curricular activities</span></Col>
              <Col span={4}> </Col>
              <Col span={10}> <span style={{ color: "#98A1B4", cursor: "pointer" }}> <b style={{ color: "#25B869", paddingRight: 10 }}>+2% </b>Add courses</span></Col>
            </Row>

            <Row className={classes.suggestionInfoRow}>
              <Col span={10}> <span style={{ color: "#98A1B4", cursor: "pointer" }}> <b style={{ color: "#25B869", paddingRight: 10 }}>+8% </b>Add education</span></Col>
              <Col span={4}> </Col>
              <Col span={10}> <span style={{ color: "#98A1B4", cursor: "pointer" }}> <b style={{ color: "#25B869", paddingRight: 10 }}>+2% </b>Add languages</span></Col>
            </Row>

            <Row className={classes.suggestionInfoRow}>
              <Col span={10}> <span style={{ color: "#98A1B4", cursor: "pointer" }}> <b style={{ color: "#25B869", paddingRight: 10 }}>+5% </b>Add skills</span></Col>
              <Col span={4}></Col>
              <Col span={10}> <span style={{ color: "#98A1B4", cursor: "pointer" }}> <b style={{ color: "#25B869", paddingRight: 10 }}>+9% </b>Add employment history</span></Col>
            </Row>

          </div>
        )}
      </div>
      <div className="d-flex align-items-center py-1 Main-title2">
        <div className="mt-3">
          <h2 className='MainPoints'>Personal Details </h2>
        </div>

        <div className="mx-1">
          <CreateOutlinedIcon className="pencilIcon-div" />
        </div>
      </div>
      <form
        className={classes.formStyle}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      //onSubmit={(event, type, id) => handleSubmit(onSubmit(event, type, id))}
      // target="#"
      >
        <Row className={classes.rowWidth}>
          <Col span={11}>
            <span className={classes.title}>Wanted Job Title</span>
            <TextField
              id="filled-basic"
              name="job_title"
              variant="filled"
              defaultValue={content.header.job_title}
              inputRef={register}
              onChange={handleSubmit(onSubmit)}
              style={{ width: '100%' }}
            />

          </Col>
          <Col span={2}></Col>
          <Col span={3}>


            <Upload

              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              // beforeUpload={beforeUpload}
              // onChange={this.handleChange}
              disabled={true}
            >
              <svg className={classes.img} width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M8,11 C8,7.83333333 9.375,6 12,6 C14.625,6 16,7.83333333 16,11 C16.5522847,11 17,11.4477153 17,12 L17,17 C17,17.5522847 16.5522847,18 16,18 L8,18 C7.44771525,18 7,17.5522847 7,17 L7,12 C7,11.4477153 7.44771525,11 8,11 Z M10,11 L14,11 C14,8.83333333 13.375,8 12,8 C10.625,8 10,8.83333333 10,11 Z"></path></svg>

            </Upload>

          </Col>
          <Col span={7} className={classes.uploadPhotoText}>
            This template dosen't support photo upload
          </Col>
        </Row>

        <Row className={classes.rowWidth}>

          <Col span={11}>
            <span className={classes.title}> First Name</span>

            <TextField
              id="filled-basic"
              // label="City"
              name="first_name"
              variant="filled"
              defaultValue={content.header.first_name}
              inputRef={register}
              onChange={handleSubmit(onSubmit)}
              style={{ width: '100%' }}
            />

          </Col>
          <Col span={2}></Col>
          <Col span={11}>
            <span className={classes.title}>Last Name</span>
            <TextField
              id="filled-basic"
              // label="State"
              name="last_name"
              variant="filled"
              defaultValue={content.header.last_name}
              inputRef={register}
              onChange={handleSubmit(onSubmit)}
              style={{ width: '100%' }}

            />
          </Col>
        </Row>

        <Row className={classes.rowWidth}>

          <Col span={11}>
            <span className={classes.title}>Email</span>

            <TextField
              id="filled-basic"
              // label="Zip Code"
              name="email"
              variant="filled"
              defaultValue={content.header.email}
              inputRef={register}
              onChange={handleSubmit(onSubmit)}
              style={{ width: '100%' }}

            />
          </Col>
          <Col span={2}></Col>
          <Col span={11}>
            <span className={classes.title}>Phone</span>


            <TextField
              id="filled-basic"
              name="phone"
              variant="filled"
              defaultValue={content.header.phone}
              inputRef={register}
              onChange={handleSubmit(onSubmit)}
              style={{ width: '100%' }}

            />
          </Col>
        </Row>


        {btnDisplay && (
          <span> <h4
            onClick={handleDisplayClick}
            className='edit-hide'
          // style={{ color: '#2196F3', cursor: 'pointer', marginTop: '30px', marginBottom: '30px' }}

          >
            Edit additional Details<KeyboardArrowDownIcon style={{ verticalAlign: 'middle' }} />
          </h4> </span>
        )}

        {btnHide && (
          <span>
            <Row className={classes.rowWidth}>

              <Col span={11}>
                <span className={classes.title}>Country</span>
                <TextField
                  id="filled-basic"
                  name="country"
                  variant="filled"
                  defaultValue={content.header.country}
                  inputRef={register}
                  onChange={handleSubmit(onSubmit)}
                  style={{ width: '100%' }}
                />
              </Col>
              <Col span={2}></Col>
              <Col span={11}>
                <span className={classes.title}>City</span>


                <TextField
                  id="filled-basic"
                  // label="Phone"
                  name="city"
                  variant="filled"
                  defaultValue={content.header.city}
                  inputRef={register}
                  onChange={handleSubmit(onSubmit)}
                  style={{ width: '100%' }}

                />
              </Col>
            </Row>

            <Row className={classes.rowWidth}>

              <Col span={11}>
                <span className={classes.title}>Address</span>

                <TextField
                  id="filled-basic"
                  // label="Zip Code"
                  name="address"
                  variant="filled"
                  defaultValue={content.header.address}
                  inputRef={register}
                  onChange={handleSubmit(onSubmit)}
                  style={{ width: '100%' }}

                />
              </Col>
              <Col span={2}></Col>
              <Col span={11}>
                <span className={classes.title}>Postal Code</span>


                <TextField
                  id="filled-basic"
                  // label="Phone"
                  name="postal_code"
                  variant="filled"
                  defaultValue={content.header.postal_code}
                  inputRef={register}
                  onChange={handleSubmit(onSubmit)}
                  style={{ width: '100%' }}

                />
              </Col>
            </Row>
            <Row className={classes.rowWidth}>

              <Col span={11}>
                <span className={classes.title}>Driving license</span>

                <TextField
                  id="filled-basic"
                  name="driving_license"
                  variant="filled"
                  defaultValue={content.header.driving_license}
                  inputRef={register}
                  onChange={handleSubmit(onSubmit)}
                  style={{ width: '100%' }}

                />
              </Col>
              <Col span={2}></Col>
              <Col span={11}>
                <span className={classes.title}>Nationality</span>


                <TextField
                  id="filled-basic"
                  name="nationality"
                  variant="filled"
                  defaultValue={content.header.nationality}
                  inputRef={register}
                  onChange={handleSubmit(onSubmit)}
                  style={{ width: '100%' }}

                />
              </Col>
            </Row>

            <Row className={classes.rowWidth}>

              <Col span={11}>
                <span className={classes.title}>Place Of Birth</span>

                <TextField
                  id="filled-basic"
                  name="place_of_birth"
                  variant="filled"
                  defaultValue={content.header.place_of_birth}
                  inputRef={register}
                  onChange={handleSubmit(onSubmit)}
                  style={{ width: '100%' }}

                />
              </Col>
              <Col span={2}></Col>
              <Col span={11}>
                <span className={classes.title}>Date Of Birth</span>

                <TextField
                  id="filled-basic"

                  name="date_of_birth"
                  variant="filled"
                  defaultValue={content.header.date_of_birth}
                  inputRef={register}
                  onChange={handleSubmit(onSubmit)}
                  style={{ width: '100%' }}

                />

                {/* <DatePicker
                  variant="filled" size={"large"}
                  format="YYYY-MM-DD"
                  disabledDate={disabledDate}
                  style={{ width: '100%' }} /> */}

              </Col>
            </Row>
            <h4
              onClick={handleHideClick}
              className='edit-hide'
            // style={{ cursor: 'pointer', color: '#2196F3', marginTop: '30px', marginBottom: '30px' }}
            >
              Hide additional Details<KeyboardArrowUpIcon style={{ verticalAlign: 'middle' }} />
            </h4>
          </span>

        )}

        <div className='' style={{ marginBottom: '20px' }}>
          <div>
            <div className="d-flex align-items-center Main-title2">
              <div className="mt-3">
                <h2 className='MainPoints'>Professional Summary </h2>
              </div>
              <div className="mx-1">
                <CreateOutlinedIcon className="pencilIcon-div" />
              </div>
            </div>
            <p style={{ fontSize: 16, color: '#98A1B3' }}>Include 2-3 clear sentences about your overall experience</p>

          </div>
          <div
            style={{ cursor: "pointer" }}
            className=" d-flex justify-content-end"
          >
            <div>
              <p className="btn-text d-none d-lg-block">Add phrases</p>
            </div>
            <div>
              <AddCircle
                className="btn-text2 d-none d-lg-block"
                style={{
                  backgroundColor: "#1B9CFC",
                  color: "white",
                  borderRadius: "50%",
                  padding: "1px",
                  fontSize: "1.1rem",
                  margin: "0px 10px 0px 0px",
                }}
              />
            </div>
          </div>

          <MuiThemeProvider theme={defaultTheme}>
            <MUIRichTextEditor
              label=" e.g. Passionate science teacher with 8+ year of experience and a track Record of ..."
              // onSave={save}
              inlineToolbar={true}
              name="professional_summary"
              inputRef={register}
              // onChange={handleSubmit(onSubmit2)}

              onChange={save}
              defaultValue={content.professional.professional_summary}
              controls={["bold", "italic", "underline", "strikethrough", "numberList", "bulletList", "spellcheck"]}
            />
          </MuiThemeProvider>



        </div>

        {/* <ProfessionalSummary /> */}
        <EmploymentHistory />
        <EducationNew />
        <SocialLinks />
        <Skill />
        {content.addSection.courses ?
          <Courses />
          : ''}


        {content.addSection.activities ?
          <ExtraCuriActivities />
          : ''}
        {content.addSection.hobbies ?
          <Hobbies />
          : ''}


        {content.addSection.languages ?
          <Languages />
          : ''}
        {content.addSection.internship ?
          <Internship />
          : ''}


        {content.addSection.refrences ?
          <Refrences />
          : ''}

        {content.contextArray.length ?
          content.contextArray.map((item) => {
            console.log('item ==> ', item)
            return <>
              <span> item is </span>
            </>
          }
          )

          : ''}



        <AddSection />





        {/* <Button
          variant="contained"
          color="secondary"
          type="submit"
          style={{ margin: 8 }}
        >
          Update
        </Button> */}
      </form>
    </div>
  );

}

export default Header;







