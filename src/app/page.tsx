import AddTaskModal from "@/components/modals/AddTaskModal";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100dvw",
        height: "100dvh",
      }}
    >
      <AddTaskModal />
    </div>
  );
}
