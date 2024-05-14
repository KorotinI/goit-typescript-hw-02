import { FC } from "react";
import css from "./ErrorMessage.module.css";

const ErrorMessage: FC = () => {
  return (
    <div className={css.errorMessage}>
      ERROR, try again!
    </div>
  );
};

export default ErrorMessage;