import React, {useState} from 'react';
import './App.css';
import NavBar from './components/navbar.jsx'
import CourseList from './components/courses_list.jsx'
import CourseInfo from './components/course_info.jsx'
import SectionInfo from './components/section_details.jsx'
import styled from 'styled-components'
import data from './data'

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
  return (
    <div className="App">
      <NavBar>
          <FlexDiv>
            <CourseList state={state} setSelectedCourse={setSelectedCourse} />
            <CourseInfo state={state} selectedCourse={selectedCourse} courseInfo={courseInfo} setCourseInfo={setCourseInfo}/>
            <SectionInfo courseInfo={courseInfo} setCourseInfo={setCourseInfo} state={state} selectedCourse={selectedCourse} />
          </FlexDiv>
      </NavBar>
    </div>
  );
}

export default App;
