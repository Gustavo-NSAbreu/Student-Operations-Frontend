import { useForm } from 'react-hook-form';
import { update } from '../../../../../../api/api';
import { StudentFormSchema } from '../../../../../../interfaces';
import { useContext } from 'react';
import { StudentContext } from '../../../../../../context/StudentContext';

interface StudentUpdateModalProps {
	id: string;
	registration: number;
	isModalOpen: boolean;
	toggleUpdateModal: () => void;
}

export default function StudentUpdateModal({
	id,
	registration,
	isModalOpen,
	toggleUpdateModal,
}: StudentUpdateModalProps) {
	const { register, handleSubmit, reset } = useForm<StudentFormSchema>();

	const { updateStudent } = useContext(StudentContext);

	async function handleUpdate(data: StudentFormSchema) {
		const student = { ...data, id, registration };

		const updatedStudent = await update(student);
		toggleUpdateModal();
		updateStudent(updatedStudent);
		reset();
	}

	return (
		<dialog
			open={isModalOpen}
			className='open:fixed not-open:hidden self-center justify-self-center inset-0 flex flex-col items-center justify-center gap-4 p-6 rounded bg-slate-900 text-slate-300 backdrop-blur-xl backdrop:bg-black' //TODO: Backdrop not working
		>
			<h3
				className='text-xl font-semibold self-start'
			>
				Update student
			</h3>
			<form onSubmit={handleSubmit(handleUpdate)} className='flex flex-col gap-4'>
				<div
					className='flex gap-4 w-full'
				>
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
				<div
					className='flex flex-row justify-end w-full gap-2'
				>
					<button
						type='submit'
						className='px-2 py-1 text-sm font-semibold bg-slate-300 rounded-md text-slate-950 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-slate-500'
					>
						Create
					</button>
					<button
						className='px-2 py-1 text-sm font-semibold bg-slate-800 rounded-md text-slate-300 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-slate-500'
						type='button'
						onClick={toggleUpdateModal}
					>
						Close
					</button>
				</div>
			</form>
		</dialog>
	);
}
