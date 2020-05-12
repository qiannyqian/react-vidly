import React from 'react';

const MovieForm = ({ match, history }) => {
  return (
    <div>
      <h1>Movie Form </h1>
      {match.params.id}
      <br />
      <button
        className="btn btn-primary"
        onClick={() => history.push('/movies')}
      >
        Save
      </button>
    </div>
  );
};

export default MovieForm;
