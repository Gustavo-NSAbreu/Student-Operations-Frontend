import { memo, useState, useContext } from 'react';
import { Student } from '../../../../interfaces';
import StudentUpdateModal from './components/StudentUpdateModal';
import { kill } from '../../../../api/api';
import { StudentContext } from '../../../../context/StudentContext';
import { PencilLine, Trash } from '@phosphor-icons/react';

interface TableRowProps {
	student: Student;
}

export default memo(function TableRow({ student }: TableRowProps) {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const { deleteStudent } = useContext(StudentContext);

	function toggleUpdateModal() {
		setIsModalOpen((state) => !state);
	}

	async function handleDelete() {
		await kill({ id: student.id, registration: student.registration });
		deleteStudent(student.id);
	}

	return (
		<tr>
			<td className='p-1.5 border-b-slate-300 border-b not-hover:max-w-28 text-ellipsis overflow-hidden whitespace-nowrap'>
				{student.id}
			</td>
			<td className='p-1.5 border-b-slate-300 border-b max-w-28 text-ellipsis overflow-hidden whitespace-nowrap'>
				{student.firstName}
			</td>
			<td className='p-1.5 border-b-slate-300 border-b max-w-28 text-ellipsis overflow-hidden whitespace-nowrap'>
				{student.lastName}
			</td>
			<td className='p-1.5 border-b-slate-300 border-b max-w-28 text-ellipsis overflow-hidden whitespace-nowrap'>
				{student.registration}
			</td>
			<td className='p-1.5 border-b-slate-300 border-b'>
				<div className='flex justify-center items-center gap-2'>
					<button
						type='button'
						onClick={toggleUpdateModal}
						className='flex items-center justify-center gap-1.5 px-2 py-1 font-semibold rounded-md bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-slate-500'
					>
						<PencilLine size={14} />
						Update
					</button>
					<button
						type='button'
						onClick={handleDelete}
						className='flex items-center justify-center gap-1.5 px-2 py-1 font-semibold rounded-md text-red-500 bg-red-950 hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-950 focus:ring-red-500'
					>
						<Trash size={14} />
						Delete
					</button>
					<StudentUpdateModal
						id={student.id}
						registration={student.registration}
						isModalOpen={isModalOpen}
						toggleUpdateModal={toggleUpdateModal}
					/>
				</div>
			</td>
		</tr>
	);
});
