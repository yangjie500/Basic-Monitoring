import React, { useRef, useState } from "react"
import { useFetcher } from "react-router-dom"
import { Heading } from '@chakra-ui/react'
import { Button, Box } from "@chakra-ui/react"
import { Flex, Spacer } from '@chakra-ui/react'
import { useDisclosure } from "@chakra-ui/react"

import SubmitModal from "./SubmitModal"
import TaskMenu from "./TaskMenu"

export default function Home() {
  const [taskStatus, setTaskStatus] = useState<TaskState>('All')
  const [version, setVersion] = useState(1)
  const fetcher = useFetcher();
  const selectForm = useRef(null)
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toggleVersion = () => {
    setVersion((prevVersion => {
      const maxVersion = 2;
      const currVersion = prevVersion == maxVersion ? 1: prevVersion + 1;
      return currVersion
    }))
  }

  return (
    <Box borderBottom='2px' borderColor='gray.200' p='4' pb='2'>
      <fetcher.Form method="get" ref={selectForm}>
        <input name='status' type='search' value={taskStatus} readOnly hidden aria-hidden/>
        <input name='version' type='search' value={`v${version}`} readOnly hidden aria-hidden/>
        <Flex p={2} align='center'>
          <Heading as='h1' size='lg'>SGP-Quotation</Heading>
          <Box alignSelf='flex-start' ml={2} cursor='pointer' userSelect='none' onClick={toggleVersion}>v{version}</Box>
          <Spacer />

          {/* Insert Form here */}
          <TaskMenu taskStatus={taskStatus} setTaskStatus={setTaskStatus} formRef={selectForm} version={version}/>
          <Button colorScheme='yellow' ml={8} onClick={onOpen}>Submit</Button>
        </Flex>
      </fetcher.Form>
      
      <SubmitModal isOpen={isOpen} onClose={onClose}/>
    </Box>
  )
}

type TaskState = 'All' | 'Success' | 'Failure' | 'Pending'