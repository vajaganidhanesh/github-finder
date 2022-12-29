import React, { useContext } from 'react'
import AlertContext from '../context/alert/AlertContext'

function Alert() {
  const {alert} = useContext(AlertContext);
  return (
    alert !== null && (
      <>
        <p className="flex justify-center items-center mb-4 space-x-2">
          {alert.type === "error" && (
            <>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.1001 4.9001C15.2001 1.0001 8.8001 1.0001 4.9001 4.9001C1.0001 8.8001 1.0001 15.2001 4.9001 19.1001C8.8001 23.0001 15.1001 23.0001 19.0001 19.1001C22.9001 15.2001 23.0001 8.8001 19.1001 4.9001V4.9001ZM14.8001 16.2001L12.0001 13.4001L9.2001 16.2001L7.8001 14.8001L10.6001 12.0001L7.8001 9.2001L9.2001 7.8001L12.0001 10.6001L14.8001 7.8001L16.2001 9.2001L13.4001 12.0001L16.2001 14.8001L14.8001 16.2001V16.2001Z"
                  fill="#E81421"
                  fill-opacity="0.63"
                />
              </svg>
            </>
          )}
          <p className="flex-1 text-base font-semibold leading-7 text-white">
            <strong>{alert.msg}</strong>
          </p>
        </p>
      </>
    )
  );
}

export default Alert
