import { useState } from 'react';
import StudentCreationModal from './components/StudentCreationModal';
import { Plus } from '@phosphor-icons/react';

export default function Header() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	function toggleCreationModal() {
		setIsModalOpen((state) => !state);
	}

	return (
		<header className='flex flex-row justify-between w-3xl'>
			<h2 className='text-2xl font-semibold'>Student Operations</h2>
			<button
				className='flex items-center justify-center gap-1.5 px-2 py-1 text-sm font-semibold rounded-md bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-slate-500'
				type='button'
				onClick={toggleCreationModal}
			>
				<Plus size={14} />
				New student
			</button>
			<StudentCreationModal
				isModalOpen={isModalOpen}
				toggleCreationModal={toggleCreationModal}
			/>
		</header>
	);
}
