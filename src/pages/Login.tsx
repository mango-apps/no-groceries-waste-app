import { useState } from 'react'
import {
	Flex,
	Heading,
	Input,
	Button,
	InputGroup,
	Stack,
	InputLeftElement,
	chakra,
	Box,
	Link,
	Avatar,
	FormControl,
	FormHelperText,
	InputRightElement
} from '@chakra-ui/react'
import { FaUserAlt, FaLock } from 'react-icons/fa'

const CFaUserAlt = chakra(FaUserAlt)
const CFaLock = chakra(FaLock)

export function Login() {
	const [showPassword, setShowPassword] = useState(false)

	const handleShowClick = () => setShowPassword(!showPassword)

	return (
		<Flex
			flexDirection='column'
			width='100wh'
			height='100vh'
			bgGradient='linear(to-b, orange.200, red.300)'
			justifyContent='center'
			alignItems='center'
		>
			<Stack
				flexDir='column'
				mb='2'
				justifyContent='center'
				alignItems='center'
			>
				<Avatar bg='blue.700' />
				<Heading color='blue.700'>No waste your Groceries!</Heading>
				<Box minW={{ base: '90%', md: '468px' }}>
					<form>
						<Stack
							spacing={4}
							paddingX={'2.15rem'}
							paddingY={'2.25rem'}
							backgroundColor='whiteAlpha.900'
							boxShadow='md'
							borderRadius={'md'}
						>
							<FormControl>
								<InputGroup>
									<InputLeftElement
										pointerEvents='none'
										children={<CFaUserAlt color='gray.300' />}
									/>
									<Input type='email' placeholder='email address' />
								</InputGroup>
							</FormControl>
							<FormControl>
								<InputGroup>
									<InputLeftElement
										pointerEvents='none'
										color='gray.300'
										children={<CFaLock color='gray.300' />}
									/>
									<Input
										type={showPassword ? 'text' : 'password'}
										placeholder='Password'
									/>
									<InputRightElement width='4.5rem'>
										<Button h='1.75rem' size='sm' onClick={handleShowClick}>
											{showPassword ? 'Hide' : 'Show'}
										</Button>
									</InputRightElement>
								</InputGroup>
								<FormHelperText textAlign='right'>
									<Link>forgot password?</Link>
								</FormHelperText>
							</FormControl>
							<Button
								borderRadius={'md'}
								type='submit'
								variant='solid'
								colorScheme='blue'
								width='full'
							>
								Login
							</Button>
						</Stack>
					</form>
				</Box>
			</Stack>
			<Box color={'whiteAlpha.900'}>
				New to us?{' '}
				<Link color='blue.700' href='#'>
					Sign Up
				</Link>
			</Box>
		</Flex>
	)
}
