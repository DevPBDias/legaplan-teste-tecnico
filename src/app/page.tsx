import AddTaskModal from "@/components/modals/AddTaskModal";
import DeleteTaskModal from "@/components/modals/DeleteTaskModal";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        justifyContent: "center",
        width: "100dvw",
        height: "100dvh",
      }}
    >
      <AddTaskModal />
      <DeleteTaskModal />
    </div>
  );
}
