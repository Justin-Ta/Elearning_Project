import React from 'react'

export default function PageNotFound(props) {
    return (
      <div>
        <div className="text-center  my-5">
          <div className="pageNotFound">
            <img src="https://www.smartlearningdestination.com/assets/img/404hands_dribbble.gif" alt=""/>
          <h2>UH OH! You're lost.</h2>
          <p>{`The page "${props.location.pathname}" you are looking for does not exist. How you got here is a mystery. But you can click the button below to go back to the homepage.`}</p>
          <div className="form-group">
            <button
              className="btn"
              onClick={() => {
                props.history.push("/home");
              }}
            >
              HOME
            </button>
          </div>
          </div>
        </div>
      </div>
    );
}
