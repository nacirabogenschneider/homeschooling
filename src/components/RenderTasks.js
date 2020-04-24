import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import ReactHtmlParser from 'react-html-parser'
import closeBlack from '../images/closeBlack.svg'
import { firestore } from '../firebase'


export default function RenderTasks({ card }) {
  const [tasks, setTasks] = useState()

  useEffect(() => {
    setSelectedTasks()
  }, [card])

  async function setSelectedTasks() {
    const taskCard = await card
    card && setTasks(taskCard.tasks)
  }
 async function removeTask(event){
   const taskToRemoveId = event.target.id
   console.log(taskToRemoveId)
  const cardRef = await firestore.doc(`cards/${card.id}`)
    const newTaskList = tasks.filter(task => task.taskId !== taskToRemoveId)
    console.log('newTaskList', newTaskList)
    
    cardRef.update({
      tasks: newTaskList,
    })
  }

  return (
    <div>
      {tasks &&
        tasks.map((task) => (
          <RenderSection key={tasks.indexOf(task)}>
            <TaskNumber>{tasks.indexOf(task) + 1}</TaskNumber>
            <OrangeLine></OrangeLine>
            <BasisInformation>
              <img style={{height: 24}} src={closeBlack}  id={task.taskId} onClick={removeTask}></img>
              <h2>{task.title}</h2>
              <div>{ReactHtmlParser(task.task)}</div>
              <div>{task.upload}</div>
              <input
                type="radio"
                id="notdone"
                name={tasks.indexOf(task)}
                value="notdone"
              ></input>
              <label htmlFor="notdone">zu bearbeiten</label>
              <input
                type="radio"
                id="done"
                name={tasks.indexOf(task)}
                value="done"
              ></input>
              <label htmlFor="done">erledigt</label>
            </BasisInformation>
          </RenderSection>
        ))}
    </div>
  )
}

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
