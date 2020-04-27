import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import ReactHtmlParser from 'react-html-parser'
import closeBlack from '../images/closeBlack.svg'
import { firestore } from '../firebase'


export default function RenderTasks({ id, tasks, setTasks }) {
 
const [taskToRender, setTaskToRender] = useState()
const cardRef = firestore.doc(`cards/${id}`)

useEffect(()=>{
setTasksTo()
}, [tasks, setTasksTo])



async function setTasksTo(){
  const allData = await cardRef.get()
  const getData = allData.data()
  setTaskToRender(getData.tasks)
  
}

 async function removeTask(event){
  const taskToRemoveId = event.target.id
  const cardRef = await firestore.doc(`cards/${id}`)
  const newTaskList = taskToRender.filter(task => task.taskId !== taskToRemoveId)
    cardRef.update({
      tasks: newTaskList,
    })
    
    taskToRender && setTaskToRender(newTaskList)
  }

  return (
    <div >
      {taskToRender &&
        taskToRender.map((task) => (
          <RenderSection key={taskToRender.indexOf(task)}>
            <TaskNumber>{taskToRender.indexOf(task) + 1}</TaskNumber>
            <OrangeLine></OrangeLine>
            <BasisInformation>
              <img style={{height: 24}} src={closeBlack}  id={task.taskId} onClick={removeTask}></img>
              <h2>{task.title}</h2>
              <StyledTasks style={{width: '100%'}}>{ReactHtmlParser(task.task)}</StyledTasks>
              <div>{task.upload}</div>
              <input
                type="radio"
                id="notdone"
                name={taskToRender.indexOf(task)}
                value="notdone"
              ></input>
              <label htmlFor="notdone">zu bearbeiten</label>
              <input
                type="radio"
                id="done"
                name={taskToRender.indexOf(task)}
                value="done"
              ></input>
              <label htmlFor="done">erledigt</label>
            </BasisInformation>
          </RenderSection>
        ))}
    </div>
  )
}


const StyledTasks = styled.div`
p{
  img{
    max-width: 350px;
  }
}
`
const OrangeLine = styled.div`
  margin: 8px 0;
  height: 30px;
  width: 100%;
  background: linear-gradient(
    to right,
    white 0%,
    white 49.9%,
    orange 49.9%,
    orange 50.1%,
    white 50.1%,
    white 100%
  );
`
const RenderSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const TaskNumber = styled.div`
  margin-top: 8px;
  color: white;
  font-size: 1.2rem;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background: orange;
  display: flex;
  justify-content: center;
  align-items: center;
`
const BasisInformation = styled.section`
  border-radius: 12px;
  border: 1px solid lightgrey;
  padding: 8px;
  margin-bottom: 8px;
  width: 100%;
  box-shadow: 0 0 6px 2px #cfcfcf;
`
