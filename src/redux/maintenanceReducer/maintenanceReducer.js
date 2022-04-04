import { types } from "./type";

const initialState = {
  maintenanceStorage: {},
};

export const maintenanceReducer = (state = initialState, { type, payload }) => {
  if (type === types.MAINTENANCE_DATA) {
    return { ...state, maintenanceStorage: payload };
  }
  if (type === "EMPTY_DATA_MAINTENANCE") {
    return { ...state, maintenanceStorage: {} };
  }

  return state;
};
