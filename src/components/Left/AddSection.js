import React from 'react';
import { Col, Row, Anchor } from 'antd';
import classes from "./Left.module.css";


// import React, { useContext,useState } from "react";
//import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
//import { useForm } from "react-hook-form";
//import { ResumeContext } from "../../contexts/ResumeContext";

const { Link } = Anchor;

const useStyles = makeStyles({
    linktag: {
        fontSize: '19px', lineHeight: '24px', fontWeight: '400', color: '#A5A1B3'
    }
})

function AddSection() {

    const linkClass = useStyles();

    const handleClick = (e) => {
        e.preventDefault();
        console.log(' e==-- >', e)

    };

    // const { content, updateEducationData, removeFakeData } = useContext(
    //     ResumeContext
    // );
    return (<>
        <h2>Add Section</h2>
        <div>
            <Anchor affix={false} onClick={handleClick}>
                <Row>
                    <Col span={11} className={[linkClass.linktag, classes.customSection]}> <Link href="#" title="Custom Secion" /></Col>
                    <Col span={2} ></Col>
                    <Col span={11} className={linkClass.linktag} ><Link href="#" title="Courses" /></Col>
                </Row><Row>
                    <Col span={11} className={linkClass.linktag}><Link href="#" title="Extra-curricular Activities" /></Col>
                    <Col span={2} ></Col>
                    <Col span={11} className={linkClass.linktag}><Link href="#" title="Internship" /></Col>
                </Row><Row>
                    <Col span={11} className={linkClass.linktag}><Link href="#" title="Hobbies" /></Col>
                    <Col span={2} ></Col>
                    <Col span={11} className={linkClass.linktag}><Link href="#" title="Languages" /></Col>
                </Row><Row>
                    <Col span={11} className={linkClass.linktag}><Link href="#" title="Refrences" /></Col>
                    <Col span={2} ></Col>
                    <Col span={11} ></Col>
                </Row>
            </Anchor>
        </div>

        {/* <Button
                    color='primary'
                    startIcon=''
                    onClick={addCourses}
                >
                 Add course
                </Button> */}

    </>);
}

export default AddSection;
