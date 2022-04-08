import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactToPrint from "react-to-print";
import { getMaintenanceFunction } from "../../redux/maintenanceReducer/action";

import ReceiptFunction from "./ReceiptFunction";

function PrintComponent({ fullName }) {
  const componentRef = React.useRef(null);

  const onBeforeGetContentResolve = React.useRef(null);

  const [loading, setLoading] = React.useState(false);
  const [text, setText] = React.useState("old boring text");

  const handleAfterPrint = React.useCallback(() => {
    console.log("`onAfterPrint` called");
  }, []);

  const handleBeforePrint = React.useCallback(() => {
    console.log("`onBeforePrint` called");
  }, []);

  const handleOnBeforeGetContent = React.useCallback(() => {
    console.log("`onBeforeGetContent` called");
    setLoading(true);
    setText("Loading new text...");

    return new Promise((resolve) => {
      onBeforeGetContentResolve.current = resolve;

      setTimeout(() => {
        setLoading(false);
        setText("New, Updated Text!");
        resolve();
      }, 2000);
    });
  }, [setLoading, setText]);

  React.useEffect(() => {
    if (
      text === "New, Updated Text!" &&
      typeof onBeforeGetContentResolve.current === "function"
    ) {
      onBeforeGetContentResolve.current();
    }
  }, [onBeforeGetContentResolve.current, text]);

  const reactToPrintContent = React.useCallback(() => {
    return componentRef.current;
  }, [componentRef.current]);

  const reactToPrintTrigger = React.useCallback(() => {
    return <button className="btn btn-primary">Print Out</button>; // eslint-disable-line max-len
  }, []);

  const maintenanceData = useSelector(
    (state) => state.maintenance.maintenanceStorage
  );

  console.log("Print Component : ", maintenanceData);

  return (
    <>
      <ReactToPrint
        content={reactToPrintContent}
        documentTitle="DigitalSocietyReceipt"
        onAfterPrint={handleAfterPrint}
        onBeforeGetContent={handleOnBeforeGetContent}
        onBeforePrint={handleBeforePrint}
        removeAfterPrint
        trigger={reactToPrintTrigger}
      />
      {/* {loading && <p className="indicator">onBeforeGetContent: Loading...</p>} */}
      <ReceiptFunction
        ref={componentRef}
        maintenanceData={maintenanceData}
        fullName={fullName}
      />
    </>
  );
}

export default PrintComponent;
