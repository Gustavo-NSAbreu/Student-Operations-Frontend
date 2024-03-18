import { useState } from "react";
import StudentCreationModal from "./components/StudentCreationModal";

export default function Header() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleCreationModal() {
    setIsModalOpen(state => !state);
  }

  return (
    <header>
      <h2>Student Operations</h2>
      <button type="button" onClick={toggleCreationModal}>+ New student</button>
      <StudentCreationModal isModalOpen={isModalOpen} toggleCreationModal={toggleCreationModal} />
    </header>
  );
}