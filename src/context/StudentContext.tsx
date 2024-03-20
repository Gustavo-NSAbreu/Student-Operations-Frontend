import { createContext, useState } from 'react';
import { Student } from '../interfaces';

interface StudentContextData {
	students: Student[];
	setStudentList: (students: Student[]) => void;
	addStudent: (newStudent: Student) => void;
	updateStudent: (updatedStudent: Student) => void;
	deleteStudent: (id: string) => void;
}

export const StudentContext = createContext({} as StudentContextData);

interface StudentContextProps {
	children: React.ReactNode;
}

export default function StudentContextProvider({
	children,
}: StudentContextProps) {
	const [students, setStudents] = useState<Student[]>([]);

	function setStudentList(students: Student[]) {
		setStudents(students);
	}

	function addStudent(newStudent: Student) {
		setStudents((state) => [...state, newStudent]);
	}

	function updateStudent(updatedStudent: Student) {
		setStudents((state) =>
			state.map((student) =>
				student.id === updatedStudent.id ? updatedStudent : student,
			),
		);
	}

	function deleteStudent(id: string) {
		setStudents((state) => state.filter((student) => student.id !== id));
	}

	return (
		<StudentContext.Provider
			value={{
				students,
				setStudentList,
				addStudent,
				updateStudent,
				deleteStudent,
			}}
		>
			{children}
		</StudentContext.Provider>
	);
}
