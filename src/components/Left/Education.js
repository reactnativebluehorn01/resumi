import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import classes from "./Left.module.css";
import { useForm } from "react-hook-form";
import { ResumeContext } from "../../contexts/ResumeContext";
import { Col } from 'antd';


function Education() {
  const { content, updateEducationData, removeFakeData } = useContext(
    ResumeContext
  );
  const [btnText, setBtnText] = useState("Add");

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    removeFakeData();
    updateEducationData(data);
    setBtnText("Update");
  };

  return (
    <div className="">
      <h2>Education hi ahjsuh jvu guv </h2>
      <form
        className={classes.formStyle}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >


        <Col span={11}>
          <span className={classes.title}>Institution</span>
          <TextField
            id="outlined-basic"
            // label="Institution"
            // placeholder="e.g Teacher"
            name="institution"
            variant="outlined"
            defaultValue={content.education.institution}
            inputRef={register}

            onChange={handleSubmit(onSubmit)}
            // style={{ width: '100%' }}
            style={{ marginTop: 12, marginLeft: 7, marginRight: 8 }}
          />

        </Col>






        <TextField
          id="outlined-basic"
          label="City, State, Country"
          name="city"
          variant="outlined"
          defaultValue={content.education.city}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Major"
          name="major"
          variant="outlined"
          defaultValue={content.education.major}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Graduation Year"
          name="gradYear"
          variant="outlined"
          defaultValue={content.education.gradYear}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Additional Info"
          name="additional"
          variant="outlined"
          defaultValue={content.education.additional}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <Button
          variant="contained"
          color="secondary"
          type="submit"
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        >
          {btnText}
        </Button>
      </form>
    </div>
  );
}

export default Education;





// ................................................................

// <Row className={classes.rowWidth}>
//           <Col span={11}>
//             <span className={classes.title}>Wanted Job Title</span>
//             <TextField
//               id="filled-basic"
//               //  label="Full Name"
//               // placeholder="e.g Teacher"
//               name="name"
//               variant="filled"
//               defaultValue={content.header.name}
//               inputRef={register}

//               onChange={handleSubmit(onSubmit)}
//               style={{ width: '100%' }}
//             // style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
//             />

//           </Col>
//           <Col span={2}></Col>
//           <Col span={3}>
//             {/* <span className={classes.title}>Wanted Job Title</span>

//             <TextField
//               id="filled-basic"
//               // label="Address"
//               name="address"
//               variant="filled"
//               defaultValue={content.header.address}
//               inputRef={register}
//               onChange={handleSubmit(onSubmit)}
//               style={{ width: '100%' }}

//             /> */}

//             <Upload

//               name="avatar"
//               listType="picture-card"
//               className="avatar-uploader"
//               showUploadList={false}
//               action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
//             // beforeUpload={beforeUpload}
//             // onChange={this.handleChange}
//               disabled={true}
//             >
//               <svg className={classes.img} width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M8,11 C8,7.83333333 9.375,6 12,6 C14.625,6 16,7.83333333 16,11 C16.5522847,11 17,11.4477153 17,12 L17,17 C17,17.5522847 16.5522847,18 16,18 L8,18 C7.44771525,18 7,17.5522847 7,17 L7,12 C7,11.4477153 7.44771525,11 8,11 Z M10,11 L14,11 C14,8.83333333 13.375,8 12,8 C10.625,8 10,8.83333333 10,11 Z"></path></svg>
//               {/* <span className={classes.img}>
//                 <img src={lockImage} alt="avatar" style={{ height: 24, width: 24, color: "red" }} />

//               </span> */}
//               {/* {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton} */}
//             </Upload>




//           </Col>
//           <Col span={8} className={classes.uploadPhotoText}>

//               This template dosen't support photo upload

//           </Col>
//         </Row>