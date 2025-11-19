import React from "react";

function withLoader(WrappedComponent) {
  return function LoaderComponent(props) {
    return (
      <div className="fade-in">
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default withLoader;
