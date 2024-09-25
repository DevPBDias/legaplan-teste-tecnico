import Loader from "@/components/loader/Loader";
import "./styles.scss";

const Loading = () => {
  return (
    <main className="loading-modal">
      <div className="loading-content">
        <Loader />
      </div>
    </main>
  );
};

export default Loading;
