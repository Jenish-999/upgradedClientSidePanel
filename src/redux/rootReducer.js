import { combineReducers } from "redux";
import { galleryReducer } from "./galleryReducer/galleryReducer";
import { maintenanceReducer } from "./maintenanceReducer/maintenanceReducer";
import { memberReducer } from "./membersRedux/memberReducer";
import { noticeReducer } from "./noticeReducer/noticeRedcuer";
import { viewReducer } from "./viewReducer/viewReducer";

export const rootReducer = combineReducers({
  members: memberReducer,
  events: viewReducer,
  gallery: galleryReducer,
  notice: noticeReducer,
  maintenance: maintenanceReducer,
});
