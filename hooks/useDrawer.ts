import { useDisclosure } from '@chakra-ui/react'

export default function useDrawer() {
  const { isOpen, onClose, onToggle } = useDisclosure()
  return { isOpen, onClose, onToggle }
}
