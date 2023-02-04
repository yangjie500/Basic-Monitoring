import React, { useRef, useState } from 'react'
import { Button, Input } from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box
} from '@chakra-ui/react'
import { FiUpload } from 'react-icons/fi'


import ExplosiveButton from '../hooks/exploding';
import './exploding.css'
import { motion } from 'framer-motion';



export default function SubmitModal({isOpen, onClose}: ISubmitModalProps) {
  const [selectedFile, setSelectedFile] = useState<string| undefined>(undefined);
  const fileInputRef = useRef(null)

  const onCloseModified = () => {
    onClose()
    setSelectedFile(undefined)
  }

  const handleChange = () => { 
    const pdf = fileInputRef.current!['files'][0] as File
    console.log(pdf)
    if (pdf == undefined) {
      setSelectedFile(undefined)
      return
    }
    const src = URL.createObjectURL(pdf)
    setSelectedFile(src)
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const pdf = fileInputRef.current!['files'][0] as File
    console.log(pdf)
    // Make Fetch post request.
  }

  const retardButton = useRef(null)
  const retard = () => {
    if (selectedFile != undefined) {
      let ebutton = undefined
      return
    } 
    const retardBtn = retardButton.current! as HTMLButtonElement
    retardBtn.classList.add('move-left')

    if (retardBtn.classList.contains('anime-done')) {
      retardBtn.classList.add('move-right')
    }
    let ebutton = new ExplosiveButton(".exploding-button")
  }
  const animeEnd = () => {
    const retardBtn = retardButton.current! as HTMLButtonElement
    retardBtn.classList.add('anime-done')
  }
  
  return (
    <> 
      <Modal isOpen={isOpen} onClose={onCloseModified}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Submit PDF</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box as='label' border='4px' borderStyle='dashed' borderColor='gray.300' display='block' style={{'aspectRatio': 1}} position='relative' cursor='pointer'>
              <Input type='file' display='none' ref={fileInputRef} accept='.pdf' onChange={handleChange}/>
              <embed src={selectedFile} width='100%' height='100%' />
              <FiUpload size='80' color='#CBD5E0' style={{'position': 'absolute', 'left': '50%', 'top': '50%', transform: 'translate(-50%, -50%)'}}/>
            </Box>
          </ModalBody>
          <ModalFooter>
            {/* <button className='exploding-button' type="button" onMouseOver={asd}>Explode</button> */}
            <Button ref={retardButton} colorScheme='blue' mr={3} onClick={handleClick}  className='exploding-button' onMouseOver={retard} onAnimationEnd={animeEnd} data-replace='Eh HELLO?! where PDF'>Submit</Button>
            {/* <Button colorScheme='blue' mr={3} onClick={handleClick} disabled={!selectedFile}>Submit</Button> */}
            <Button colorScheme='red' onClick={onCloseModified}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

interface ISubmitModalProps {
  isOpen: boolean;
  onClose: () => void;
}