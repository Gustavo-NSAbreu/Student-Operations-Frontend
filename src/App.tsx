import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './components/Header';
import Table from './components/StudentTable';
import StudentContextProvider from './context/StudentContext';

const queryClient = new QueryClient();

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<StudentContextProvider>
				<main className='flex flex-col items-center gap-8 w-full h-dvh p-20 bg-slate-950 text-slate-300'>
					<Header />
					<Table />
				</main>
			</StudentContextProvider>
		</QueryClientProvider>
	);
}
