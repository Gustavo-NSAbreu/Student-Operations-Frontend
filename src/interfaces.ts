export interface Student {
	id: string;
	firstName: string;
	lastName: string;
	registration: number;
}

export interface StudentFormSchema {
	firstName: string;
	lastName: string;
}

export interface StudentIdentificationInformation {
	id: string;
	registration: number;
}
