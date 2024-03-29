import React, { forwardRef, createContext, Ref, ComponentType } from "react";

// hooks
import { useToastData } from "./hooks/useToastData";

// components
import { ToastContainer } from "./ToastContainer";

// constants
import { DEFAULT_TOAST_DURATION, TOAST_VARIANTS } from "./constants";

type ToastContext = {
  addToast: (a: { message: string; variant?: TOAST_VARIANTS }) => void;
  deleteToast: (a: { message: string }) => void;
};

export const ToastContext = createContext<ToastContext>({
  addToast: () => {
    throw new Error("toast5 component failed to load");
  },
  deleteToast: () => {
    throw new Error("toast5 component failed to load");
  },
});

const DEFAULT_OPTIONS = {
  color: "white",
  backgroundColor: "rgb(39 39 42)",
  progressBarColor: "#525255",
  duration: DEFAULT_TOAST_DURATION,
  top: false,
};

type Options = {
  color?: string;
  backgroundColor?: string;
  progressBarColor?: string;
  duration?: number;
  top?: boolean;
};
export const withToast5 = <P extends object>(
  Component: ComponentType<P>,
  _options: Options = DEFAULT_OPTIONS
) => {
  const options = { ...DEFAULT_OPTIONS, ..._options };
  const WithToast5Component = forwardRef((props: P, ref: Ref<any>) => {
    const { toastData, addToast, deleteToast } = useToastData();
    return (
      <ToastContext.Provider value={{ addToast, deleteToast }}>
        <Component {...props} ref={ref} />
        <ToastContainer toasts={toastData} options={options} />
      </ToastContext.Provider>
    );
  });
  WithToast5Component.displayName = "Toast 5 wrapper";
  return WithToast5Component;
};
