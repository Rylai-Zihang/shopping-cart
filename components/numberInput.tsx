import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useNumberInput
} from '@chakra-ui/react'

interface Props {
  quantity: number
  increaseCb: () => void
  decreaseCb: () => void
}
const NumberInput: React.FC<Props> = ({ quantity, increaseCb, decreaseCb }) => {
  const {
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps
  } = useNumberInput({
    step: 1,
    defaultValue: quantity,
    min: 1
  })

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()

  return (
    <InputGroup size="md" width="10rem">
      <InputLeftElement width="3rem">
        <Button size="xs" {...inc} onClick={increaseCb}>
          +
        </Button>
      </InputLeftElement>
      <Input {...input} className="text-center" />
      <InputRightElement width="3rem" margin="0">
        <Button size="xs" {...dec} onClick={decreaseCb}>
          -
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

export default NumberInput
