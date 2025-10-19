'use client'
import { Button, Container, Flex } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import Image from 'next/image'
import React from 'react'
import CreateJobForm from './CreateJobForm';

const Navbar = () => {
    const [opened, { open, close }] = useDisclosure(false);
  return (
    <Container w="900x" pt={16}>
        <Flex justify="space-between" align="center" gap={24} className='navbar'>
            <Image src="/cmwlogo.svg" alt="logo" width={44} height={44} />
            <nav>
                <ul className=''>
                    <li>Home</li>
                    <li>Find Jobs</li>
                    <li>Find Talents</li>
                    <li>About us</li>
                    <li>Testimonials</li>
                </ul>
            </nav>
            <div>
                <Button className='create-btn' onClick={open}>Create Jobs</Button>
            </div>
            <CreateJobForm opened={opened} close={close} />
        </Flex>
    </Container>
  )
}

export default Navbar