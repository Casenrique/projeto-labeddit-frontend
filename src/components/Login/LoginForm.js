import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Image,
    Divider
  } from '@chakra-ui/react';
  import logo from '../../assets/logo-labenu.svg'
  
  export default function LoginForm() {
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={4} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'} justify={'start'}>
            <Image boxSize='152px' src={logo} alt='Logo Labenu'/>
            <Text fontSize={'16px'} color={'gray.600'}>
            O projeto de rede social da Labenu
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            size='363px'
          >
            <Stack  spacing={2}>
              <FormControl id="email">
                <Input type="email" placeholder='E-mail' />
              </FormControl>
              <FormControl id="password">
                <Input type="password" placeholder='Senha' />
              </FormControl>
              <Stack spacing={2}>
                <Stack
                  // direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                </Stack>
                <Button
                  bgGradient='linear(90deg, #FF6489 0%, #F9B24E 100%)' 
                  boxShadow='2xl'
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Continuar                
                </Button>
                <Divider colorScheme={'orange'} size="ex" variant="solid"/>
                <Button
                  border= '1px' 
                  borderStyle= 'solid' 
                  bordercolor='#FE7E02'
                  borderRadius='27px'
                  bgGradient={'white'}
                  color={'#FE7E02'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Criar uma conta!
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }