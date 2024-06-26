import { BallTriangle  } from "react-loader-spinner";
import css from "./Loader.module.css";
import { FC } from "react";

const Loader: FC = () => {
  return (
    <div className={css.loader}>
      <BallTriangle 
        height={100}
        width={100}
        radius={5}
        color="#3aff24aa"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        />
    </div>
  );
};

export default Loader;