import { ACTIONS } from "./App";
import React from "react";

export const OperationButton = ({ dispatch, operation }) => {
  return (
    <button
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }>
      {operation}
    </button>
  );
};
