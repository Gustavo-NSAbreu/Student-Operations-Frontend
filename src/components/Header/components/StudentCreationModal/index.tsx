interface StudentCreationModalProps {
  isModalOpen: boolean;
  toggleCreationModal: () => void;
}

export default function StudentCreationModal({ isModalOpen, toggleCreationModal }: StudentCreationModalProps) {

  function handleSubmit(event: React.FormEvent<HTMLButtonElement>) {
    event.preventDefault();
    console.log('Form submitted');
  }

  return (
    <dialog open={isModalOpen}>
      <h3>
        Student Creation Modal
      </h3>
      <form>
        <label>First Name</label>
        <input type="text" />
        <label>Last Name</label>
        <input type="text" />
        <button type="submit" onSubmit={handleSubmit}>Create</button>
        <button type="button" onClick={toggleCreationModal}>Close</button>
      </form>
    </dialog>
  );
}