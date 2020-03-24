import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import { Button } from '@material-ui/core';


const useStyles = makeStyles(theme =>({
    root: {
        textAlign: 'center',
        width: '100%',
        ...theme.typography.button,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(1),
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
          },
    },
    heading: {
        marginBottom: 22,
    },
  }));

  const styles = {
    card_content: {
        margin: 'auto',
        width: '100%',
    },
    text_field: {
        margin: 'auto',
    },
    button: {
        margin: 'auto',
        marginTop: 15,
    }
  };

  const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 100%;
    justify-content: center;
  `;


export default function CourseInfo(props) {
    const classes = useStyles();
    const courseInfo = props.courseInfo;
    const setCourseInfo = props.setCourseInfo;
    console.log(courseInfo);

    const handleInfoChange = (e) => {
        console.log(courseInfo);
        const name = e.target.name;
        const value = e.target.value;
        setCourseInfo({...courseInfo,[name]: value});
    }
    return (
        <Card className={classes.root}>
        <CardContent style={styles.card_content}>
            <Typography variant="h5" className={classes.heading} >
                Course Info {props.selectedCourse ? `of ${props.selectedCourse}` : null}
            </Typography>
            <Form className={classes.root} noValidate>
                <TextField onChange={(event) => handleInfoChange(event)} name="l_count" label="lectures" style={styles.text_field} />
                <TextField onChange={(event) => handleInfoChange(event)} name="t_count" label="tutorials" style={styles.text_field}  />
                <TextField onChange={(event) => handleInfoChange(event)} name="p_count" label="practicals" style={styles.text_field}  />
                <TextField onChange={(event) => handleInfoChange(event)} name="student_count" label="No. of students" style={styles.text_field}  />
                <TextField onChange={(event) => handleInfoChange(event)} name="ic" label="IC" style={styles.text_field}  />
                <TextField onChange={(event) => handleInfoChange(event)} name="max_strength" label="Max Strength" style={styles.text_field}  />
            </Form>
        </CardContent>
        </Card>
    )
}
