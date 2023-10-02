import InfiniteScroll from "react-infinite-scroll-component";
import React, { useEffect, useMemo, useReducer, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getBookingHistoryCall } from "../../features/ridesFeature";

import ActiveTrip from "./ActiveTrip";
import PastTrip from "./PastTrip";
import RidesLoader from "./RidesLoader";

import "./Rides.css";
import RidesListEndMessage from "./RidesListEndMessage";
import RidesNavBar from "./RidesNavBar";

const style = {
  height: 540,
  overflow: "auto",
};

const Rides = () => {
  const dispatch = useDispatch();
  const {
    trackActiveLoadData,
    trackPastLoadData,
    error,
    status,
    isLoading,
    trackLoadStates,
  } = useSelector((state) => state.getTrackLoadData);

  const initialState = {
    pageNumber1: 0,
    pageNumber2: 0,
    activeTab: 2,
  };
  console.log("render");
  const handleRides = (state, action) => {
    switch (action.type) {
      case "ACTIVE_TAB":
        return {
          ...state,
          activeTab: action.payload.activeTab,
        };

      case "PAGE_NUMBER_ONE":
        return {
          ...state,
          pageNumber1: state.pageNumber1 + 1,
        };
      case "PAGE_NUMBER_TWO":
        return {
          ...state,
          pageNumber2: state.pageNumber2 + 1,
        };
    }
  };

  const [state, stateDispatch] = useReducer(handleRides, initialState);

  useEffect(() => {
    const tab1 = {
      active_tab: 2,
      limit: 5,
      pagecount: 1,
    };
    stateDispatch({ type: "PAGE_NUMBER_ONE" });
    dispatch(getBookingHistoryCall(tab1));

    const tab2 = {
      active_tab: 1,
      limit: 5,
      pagecount: 1,
    };
    stateDispatch({ type: "PAGE_NUMBER_TWO" });
    dispatch(getBookingHistoryCall(tab2));
  }, []);

  const [hasMoreActiveTab, setHasMoreActiveTab] = useState(true);
  const [hasMorePastTab, setHasMorePastTab] = useState(true);

  useEffect(() => {
    if (
      trackActiveLoadData.data.length > 100 ||
      error.message ||
      !trackLoadStates.tab2
    ) {
      setHasMoreActiveTab(false);
    }

    if (
      trackPastLoadData.data.length > 100 ||
      error.message ||
      !trackLoadStates.tab1
    ) {
      setHasMorePastTab(false);
    }
  });

  const fetchMoreData = () => {
    let tab = 0;
    let pagecount = 0;
    if (state.activeTab == 2) {
      tab = 2;
      pagecount = state.pageNumber1 + 1;
      stateDispatch({ type: "PAGE_NUMBER_ONE" });
      console.log(state);
    } else {
      tab = 1;
      pagecount = state.pageNumber2 + 1;
      stateDispatch({ type: "PAGE_NUMBER_TWO" });
      console.log(state);
    }
    console.log(pagecount);
    const body = {
      active_tab: tab,
      pagecount: pagecount,
      limit: 5,
    };

    dispatch(getBookingHistoryCall(body));
  };

  const formatDate = (inputDate) => {
    const [datePart, timePart] = inputDate.split(" ");
    const [day, month, year] = datePart.split("-");
    const [hour, minute, second] = timePart.split(":");
    const dateObj = new Date(
      `${year}-${month}-${day}T${hour}:${minute}:${second}`
    );

    const options = {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    return dateObj.toLocaleString("en-US", options);
  };

  const activeList = useMemo(() => {
    if (status == 1) {
      return (
        <div className="active_rides__container">
          {trackActiveLoadData.data.length > 0 &&
            trackActiveLoadData.data.map((list, index) => {
              return (
                <ActiveTrip
                  list={list}
                  formatDate={formatDate}
                  key={`key${index + 1}`}
                />
              );
            })}
        </div>
      );
    } else {
      return <div className="rides__error">{error.message}</div>;
    }
  }, [trackActiveLoadData]);

  const pastList = useMemo(() => {
    if (status == 1) {
      return (
        <div className="past_rides__container">
          {trackPastLoadData.data.map((list, index) => {
            return (
              <PastTrip
                list={list}
                formatDate={formatDate}
                key={`key${index + 1}`}
              />
            );
          })}
        </div>
      );
    } else {
      return <div className="rides__error">{error.message}</div>;
    }
  }, [trackPastLoadData]);

  return (
    <div className={`rides ${isLoading && "rides__loading"}`}>
      <div className="rides__left">
        <div className="rides__header">
          <div className="rides__header_items">
            <i className="bi-arrow-left"></i>
          </div>
          <div className="rides__header_items">
            <h4>Rides</h4>
          </div>
        </div>
        <div className="rides__navbar">
          <RidesNavBar
            activeTab={state.activeTab}
            stateDispatch={stateDispatch}
          />
        </div>

        {!error.message && state.activeTab == 2 ? (
          <div id="active_rides__tab" style={style}>
            <InfiniteScroll
              dataLength={trackActiveLoadData.data.length}
              next={fetchMoreData}
              hasMore={hasMoreActiveTab}
              loader={<RidesLoader />}
              endMessage={<RidesListEndMessage />}
              scrollableTarget={"active_rides__tab"}
            >
              {activeList}
            </InfiniteScroll>
          </div>
        ) : (
          <React.Fragment>
            {!error.message && state.activeTab == 1 ? (
              <div
                id="past_rides__tab"
                className="past_rides__container"
                style={style}
              >
                <InfiniteScroll
                  dataLength={trackPastLoadData.data.length}
                  next={fetchMoreData}
                  hasMore={hasMorePastTab}
                  loader={<RidesLoader />}
                  endMessage={<RidesListEndMessage />}
                  scrollThreshold={1}
                  scrollableTarget={"past_rides__tab"}
                >
                  {pastList}
                </InfiniteScroll>
              </div>
            ) : (
              <div style={style} className="rides__error">
                {error.message}
                {console.log(error.message)}
              </div>
            )}
          </React.Fragment>
        )}
      </div>
      <div className="rides__right"></div>
    </div>
  );
};

export default Rides;
