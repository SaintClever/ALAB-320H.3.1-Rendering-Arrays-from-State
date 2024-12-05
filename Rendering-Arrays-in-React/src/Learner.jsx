let Learner = ({ name, bio, scores }) => {

  return (
    <>
      <h1>{name}</h1>
      <p>{bio}</p>
      <ul>
        <li>{scores}</li>
      </ul>
    </>
  )
}

export { Learner };