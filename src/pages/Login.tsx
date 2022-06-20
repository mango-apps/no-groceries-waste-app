import { Input, Stack } from '@chakra-ui/react'

export function Login() {
	return (
		<Stack spacing={6}>
			<label htmlFor='Login Email'></label>
			<Input
				name='Login Email'
				variant='flushed'
				size={'sm'}
				placeholder='email@example.com'
			/>
		</Stack>
	)
}
