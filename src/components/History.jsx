import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const History = () => {
  const { history, clearShapeHistory } = useContext(GlobalContext);

  return (
    <div className="history-container mt-3">
      <h4>HISTORY</h4>
      {history.length >= 1 ? (
        <>
          <div className="history">
            <ul>
              {history.map((item, index) => (
                <li key={index}>
                  <p>Shape: {item.shape}</p>
                  {Object.entries(item.details).map((detail, index) => (
                    <span key={index}>
                      {detail[0]}: {detail[1]}
                    </span>
                  ))}
                </li>
              ))}
            </ul>
          </div>
          <button
            className="btn btn-primary mt-3"
            onClick={(e) => clearShapeHistory()}
          >
            CLEAR HISTORY
          </button>
        </>
      ) : (
        <p>No history yet</p>
      )}
    </div>
  );
};

export default History;
