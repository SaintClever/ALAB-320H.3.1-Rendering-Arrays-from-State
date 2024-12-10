import { Score } from './Score';

function Learner({ learner }) {
  return (
    <div>
      <h2>{learner.name}</h2>
      <p>{learner.bio}</p>
      <ul>
        {learner.scores.map((score, index) => (
          <Score key={index} score={score} />
        ))}
      </ul>
    </div>
  );
}

export { Learner };