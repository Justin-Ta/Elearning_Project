import React from 'react'

export default function PageNotFound(props) {
    return (
      <div>
        <div className="text-center">
          <p>{`Không tìm thấy trang: ${props.location.pathname}`}</p>
          <div className="form-group">
            <button
              className="btn btn-primary"
              onClick={() => {
                props.history.push("/home");
              }}
            >
              Bấm vào đây trở về trang chủ
            </button>
          </div>
        </div>
      </div>
    );
}
