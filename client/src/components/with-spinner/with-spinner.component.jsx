import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";
// import { Lines } from "react-preloaders";
// const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
//   return isLoading ? <Lines /> : <WrappedComponent {...otherProps} />;
// };
// export default WithSpinner;

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};
export default WithSpinner;
