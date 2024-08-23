import Swal, { SweetAlertOptions } from "sweetalert2";

interface childProps {
  titleText?: string;
  text?: string;
  options?: SweetAlertOptions;
}

export const Alert = (props: childProps) => {
  return Swal.fire({
    title: props.titleText,
    text: props.text,
    confirmButtonColor: "#0080ff",
    showCloseButton: true,
    cancelButtonColor: "#9e9e9e",
    ...props.options,
  });
};
