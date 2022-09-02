import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@chakra-ui/react'
import { 
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  Switch,
  useColorMode,
  useColorModeValue,
  Show,
  FormErrorMessage,
  FormHelperText, 
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';

const SignUp = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
	const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue('gray.100', 'gray.700');
	return (
        <>
          <Button colorScheme="teal" left='1150' onClick={onOpen}>sign Up</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
                <ModalContent width='100'>
                  <ModalCloseButton />
                    <Flex h="70vh" alignItems="center" justifyContent="center">
			                <Flex
			                  flexDirection="column"
			                  bg={formBackground}
			                  p={12}
		  	                borderRadius={8}
			                  boxShadow=""
			                >
				              <Heading  mb={6}>Sign Up</Heading>
				              <Input
				                isRequired
				                placeholder="username"
				                type="username"
				                variant="filled"
				                mb={3}
				              />
                      <Input
                        isRequired
                        placeholder='Email'
                        type="email"
                        variant="filled"
				                mb={3}
                      />
                      <Input
                        isRequired
                        placeholder='Phone Number'
                        type="number"
                        variant="filled"
				                mb={3}
                      />
				              <Input
          		          isRequired
          		          placeholder="Password"
          		          type="password"
          		          variant="filled"
          		          mb={3}
        		          />
                      <Input
          		          isRequired
          		          placeholder="Re-Enter Password"
          		          type="password"
          		          variant="filled"
          		          mb={3}
        		          />
				              <Button colorScheme="teal" mb={3}>
				                Sign Up
				              </Button>
                      <Link href="/login">
                        Already has account
                      </Link>
			            </Flex>
		            </Flex>
              </ModalContent>
            </Modal>
    </>
	);
};

export default SignUp;
