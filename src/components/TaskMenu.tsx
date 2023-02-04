import React, { useEffect, useState } from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useSubmit } from 'react-router-dom'

export default function TaskMenu({taskStatus, setTaskStatus, version, formRef}: ITaskMenuProps) {
  const submit = useSubmit();
  // const [taskState, setTaskState] = useState<TaskState>('Success')

  useEffect(() => {
    submit(formRef.current)
  }, [taskStatus, version])

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {taskStatus}
      </MenuButton>
      <MenuList>
      <MenuItem onClick={(e) => {
          setTaskStatus('All')
        }}>All</MenuItem>

        <MenuItem onClick={(e) => {
          setTaskStatus('Success')
        }}>Success</MenuItem>

        <MenuItem onClick={(e) => {
          setTaskStatus('Pending')
        }}>Pending</MenuItem>

        <MenuItem onClick={(e) => {
          setTaskStatus('Failure')    
        }}>Failure</MenuItem>
      </MenuList>
    </Menu>
  )
}


type TaskState = 'All' | 'Success' | 'Failure' | 'Pending'
interface ITaskMenuProps {
  formRef: React.MutableRefObject<null>;
  taskStatus: TaskState;
  setTaskStatus: (status: TaskState) => void;
  version: number;
}