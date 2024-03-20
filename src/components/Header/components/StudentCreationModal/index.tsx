import { useContext } from 'react';
import { StudentContext } from '../../../../context/StudentContext';
import { create } from '../../../../api/api';
import { StudentFormSchema } from '../../../../interfaces';
import { useForm } from 'react-hook-form';

export interface StudentCreationModalProps {
	isModalOpen: boolean;
	toggleCreationModal: () => void;
}

export default function StudentCreationModal({
	isModalOpen,
	toggleCreationModal,
}: StudentCreationModalProps) {
	const { register, handleSubmit, reset } = useForm<StudentFormSchema>();

	const { addStudent } = useContext(StudentContext);

	async function handleCreate(data: StudentFormSchema) {
		const newStudent = await create(data);
		toggleCreationModal();
		addStudent(newStudent);
		reset();
	}

	return (
		<dialog
			open={isModalOpen}
			className='open:fixed not-open:hidden self-center justify-self-center inset-0 flex flex-col items-center justify-center gap-4 p-6 rounded bg-slate-900 text-slate-300 backdrop-opacity-80 backdrop:bg-black'
		>
			<h3 className='text-xl font-semibold self-start'>Add new student</h3>
			<form
				onSubmit={handleSubmit(handleCreate)}
				className='flex flex-col gap-4'
			>
				<div className='flex gap-4 w-full'>
					<div className='flex flex-col'>
						<label htmlFor='firstName'>First name</label>
						<input
							className='w-full px-2 py-1 text-sm font-semibold bg-slate-900 rounded-md text-slate-300 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-slate-500'
							type='text'
							id='firstName'
							{...register('firstName')}
							required
						/>
					</div>
					<div className='flex flex-col'>
						<label htmlFor='lastName'>Last name</label>
						<input
							className='w-full px-2 py-1 text-sm font-semibold bg-slate-900 rounded-md text-slate-300 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-slate-500'
							type='text'
							id='lastName'
							{...register('lastName')}
							required
						/>
					</div>
				</div>
				<div className='flex flex-row justify-end w-full gap-2'>
					<button
						type='submit'
						className='px-2 py-1 text-sm font-semibold bg-slate-300 rounded-md text-slate-950 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-slate-500'
					>
						Create
					</button>
					<button
						className='px-2 py-1 text-sm font-semibold bg-slate-800 rounded-md text-slate-300 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-slate-500'
						type='button'
						onClick={toggleCreationModal}
					>
						Close
					</button>
				</div>
			</form>
		</dialog>
	);
}
