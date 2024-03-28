import { useContext } from "react"
// context
import { ToastContext } from "../withToast5"

export function useToast5(){
  const { addToast, deleteToast } = useContext(ToastContext);
  return { addToast, deleteToast };
}