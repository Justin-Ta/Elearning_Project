import React from 'react'

export default function Indicator(props) {
    return (
        <div className="row indicator">
        <div
          className="col-6 text-center indicatorIcon"
          onClick={() => {
            props.history.goBack();
          }}
        >
          <i class="fa fa-arrow-left"></i> Back
        </div>
        <div
          className="col-6 text-center indicatorIcon"
          onClick={() => {
            props.history.push("/");
          }}
        >
         <i class="fa fa-home"></i> Home
        </div>
      </div>
    )
}
