import { useQuery } from '@tanstack/react-query';
import { getAll } from '../../api/api';
import TableRow from './components/StudentTableRow';
import { useContext } from 'react';
import { StudentContext } from '../../context/StudentContext';
import { useEffect } from 'react';

export default function Table() {
	const { students, setStudentList } = useContext(StudentContext);

	const { data, isPending, isError, error } = useQuery({
		queryKey: ['students'],
		queryFn: getAll,
		initialData: students,
	});

	useEffect(() => {
		if (data) {
			setStudentList(data);
		}
	}, [data]);

	if (isPending) {
		return <span>Loading...</span>;
	}

	if (isError) {
		return <span>Error: {error.message}</span>;
	}

	return (
		<table className='border-spacing-0 w-3xl'>
			<thead>
				<tr>
					<th className='p-1.5 text-start border-b-slate-300 border-b text-ellipsis overflow-hidden whitespace-nowrap'>
						ID
					</th>
					<th className='p-1.5 text-start border-b-slate-300 border-b text-ellipsis overflow-hidden whitespace-nowrap'>
						First name
					</th>
					<th className='p-1.5 text-start border-b-slate-300 border-b text-ellipsis overflow-hidden whitespace-nowrap'>
						Last name
					</th>
					<th className='p-1.5 text-start border-b-slate-300 border-b text-ellipsis overflow-hidden whitespace-nowrap'>
						Registration
					</th>
					<th className='p-1.5 text-center border-b-slate-300 border-b text-ellipsis overflow-hidden whitespace-nowrap'>
						Actions
					</th>
				</tr>
			</thead>
			<tbody>
				{students.map((student) => {
					return (
						<TableRow
							key={student.id}
							student={student}
						/>
					);
				})}
			</tbody>
		</table>
	);
}
