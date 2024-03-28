// components
import { Toast } from "./components/Toast";

// hooks
import { useToast5 } from "./hooks/useToast5";

// constants
import { TOAST_VARIANTS } from "./constants";

export const ToastContainer = ({
  toasts,
  options,
}: {
  toasts: {
    message: string;
    duration: number;
    pending: number;
    variant: TOAST_VARIANTS;
  }[];
  options: {
    color: string;
    backgroundColor: string;
    progressBarColor: string;
    duration: number;
    top: boolean;
  };
}) => {
  const { deleteToast } = useToast5();
  return (
    <div
      style={{
        position: "fixed",
        zIndex: 1000,
        width: "min(25rem, 80%)",
        right: "min(1rem, 2vh)",
        display: "flex",
        flexDirection: "column",
        gap: "0.7rem",
        ...(options.top
          ? { top: "min(1rem, 2vh)" }
          : { bottom: "min(1rem, 2vh)" }),
      }}
    >
      {toasts.map(({ message, duration, pending, variant }) => (
        <Toast
          options={options}
          message={message}
          variant={variant}
          key={message}
          duration={duration}
          pending={pending}
          deleteToast={deleteToast}
        />
      ))}
    </div>
  );
};
