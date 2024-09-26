import Link from "next/link";
import "./styles.scss";

const BackBtn = () => {
  return (
    <Link className="back-btn" href="/">
      Mudar nome
    </Link>
  );
};

export default BackBtn;
