import { learnersDB } from "./learnersDB.jsx";

let Learner = ({ name, bio, scores }) => {
  return (
    <>
      <h1>{name}</h1>
      <p>{bio}</p>
    </>
  )
}

export { Learner };