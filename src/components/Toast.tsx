import React, { useEffect, useRef, useState } from "react";

// constants
import { TOAST_VARIANTS } from "../constants";

// images
import CheckedIcon from "../icons/checked.png";
import InformationIcon from "../icons/information.png";
import ExclamationIcon from "../icons/exclamation.png";
import CrossIcon from "../icons/x.png";

const VARIANT_TO_ICON = {
  [TOAST_VARIANTS.ERROR]: ExclamationIcon,
  [TOAST_VARIANTS.INFO]: InformationIcon,
  [TOAST_VARIANTS.SUCCESS]: CheckedIcon,
};

export const Toast = ({
  message,
  variant,
  duration: _duration,
  pending,
  deleteToast,
  options,
}: {
  message: string;
  variant: TOAST_VARIANTS;
  duration: number;
  pending: number;
  deleteToast: ({ message }: { message: string }) => void;
  options: {
    color: string;
    backgroundColor: string;
    progressBarColor: string;
    duration: number;
  };
}) => {
  const duration = _duration ?? options.duration;
  const [width, setWidth] = useState("100%");
  const timeoutRef = useRef<number>();
  useEffect(() => {
    setWidth("0%");
    timeoutRef.current = setTimeout(() => {
      deleteToast({ message });
    }, duration) as unknown as number;
  }, [deleteToast, message, duration]);
  return (
    <div
      style={{
        padding: "0.75rem 1rem",
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        position: "relative",
        borderRadius: "1rem",
        ...options,
      }}
    >
      <img
        src={VARIANT_TO_ICON[variant]}
        width={20}
        height={20}
        alt="Error Logo"
        style={{
          height: "2rem",
          width: "2rem",
        }}
      />
      <p style={{ margin: "0px", fontFamily: "Arial, sans-serif", flex: 1 }}>
        {message}
      </p>
      <button
        style={{
          padding: "0.5rem",
          borderRadius: "0.5rem",
          border: 0,
          backgroundColor: options.backgroundColor,
          cursor: "pointer",
        }}
        title="hide"
        onClick={() => deleteToast({ message })}
      >
        <img
          src={CrossIcon}
          alt="Remove Popup"
          style={{ filter: "invert(1)", width: "1rem" }}
        />
      </button>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "calc(100% - 2rem)",
          height: "0.2rem",
          backgroundColor: options.backgroundColor,
          overflow: "hidden",
        }}
        title={`Toast will close in ${pending} seconds`}
        aria-label={`Toast will close in ${pending} seconds`}
      >
        <div
          style={{
            backgroundColor: options.progressBarColor,
            height: "100%",
            width,
            float: "right",
            transition: `width ${duration / 1000}s linear`,
          }}
        ></div>
      </div>
    </div>
  );
};
