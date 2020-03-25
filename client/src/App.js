import React, {useState, useEffect} from 'react';
import './App.css';
import NavBar from './components/navbar.jsx'
import CourseList from './components/courses_list.jsx'
import Button from '@material-ui/core/Button';
import CourseInfo from './components/course_info.jsx'
import Typography from '@material-ui/core/Typography';
import SectionInfo from './components/section_details.jsx'
import styled from 'styled-components'
import data from './data'
import axios from 'axios'

const FlexDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

function App() {
  
  const [state, setState] = useState(data.data);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [courseInfo, setCourseInfo] = useState({
    l_count:0,
    p_count:0,
    t_count:0,
    course_code: null,
    course_type: null,
    student_count: 0,
    max_strength: 0,
    ic: null,
    l: [],
    t: [],
    p: []
  });

  const getData = async () => {
    const res = await axios.get('https://augsd-course-load.herokuapp.com/course-load/get-data/');
    console.log(res);
    setState(res.data);
  }

  useEffect(() => {
    getData();
  },[]);

  const [status,setStatus] = useState('');
  const handleSubmit =() => {
    setStatus('Submitting');
    if(courseInfo.ic == undefined || courseInfo.ic == null || courseInfo.ic == '')
      courseInfo.ic = 'Not Chosen';
    courseInfo.student_count = parseInt(courseInfo.student_count);
    axios.post('https://augsd-course-load.herokuapp.com/course-load/submit-data/',courseInfo)
    .then(response => setStatus('Submitted'))
    .catch(err => setStatus('Not Submitted'));
  }
  const handleLogout = async () => {
    const res = await axios.get('https://augsd-course-load.herokuapp.com/accounts/logout');
  }
  return (
    <div className="App">
      <NavBar handleLogout={handleLogout}>
            <Button variant="contained" color="secondary" onClick={handleSubmit} style={{marginBottom: 20, marginLeft: 'auto'}}>
              <Typography>
                Submit
              </Typography>
            </Button>
              <br/>
            <Typography style={{color: 'red', fontWeight: 'bold',marginBottom: 10}} >{status}</Typography>
          <FlexDiv>
            <CourseList state={state} setSelectedCourse={setSelectedCourse} courseInfo={courseInfo} setCourseInfo={setCourseInfo}/>
            <CourseInfo state={state} selectedCourse={selectedCourse} courseInfo={courseInfo} setCourseInfo={setCourseInfo}/>
            <SectionInfo courseInfo={courseInfo} setCourseInfo={setCourseInfo} state={state} selectedCourse={selectedCourse} />
          </FlexDiv>
      </NavBar>
    </div>
  );
}

export default App;
