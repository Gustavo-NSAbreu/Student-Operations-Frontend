import axios from 'axios';
import {
	Student,
	StudentFormSchema,
	StudentIdentificationInformation,
} from '../interfaces';
import { API_URL } from '../config/path';

export async function getAll(): Promise<Student[]> {
	const { data } = await axios.get<Student[]>(`${API_URL}`);
	return data;
}

export async function create(student: StudentFormSchema): Promise<Student> {
	const { data } = await axios.post<Student>(`${API_URL}`, student);
	return data;
}

export async function update(student: Student): Promise<Student> {
	const { id, registration } = student;
	const { data } = await axios.put<Student>(`${API_URL}`, {
		student,
		studentId: { id, registration },
	});
	return data;
}

export async function kill(
	studentInfo: StudentIdentificationInformation,
): Promise<void> {
	await axios.delete(`${API_URL}`, { data: studentInfo });
}
