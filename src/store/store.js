import { configureStore } from "@reduxjs/toolkit";
import listAddressReducer from "../features/dashBoardFeature";
import ridesReducer from "../features/ridesFeature";
import communicationReducer from "../features/communicationupdateFeature";
import loginreducer from "../features/loginFeature";
import registerFeaturesReducer from "../features/registerFeatures";

export const store = configureStore({
  reducer: {
    listAddress: listAddressReducer,
    getTrackLoadData: ridesReducer,
    getHistoryCommunication: communicationReducer,
    user_details: loginreducer,
    registerFeatures: registerFeaturesReducer,
  },
});
