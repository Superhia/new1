import { HStack, Button } from '@chakra-ui/react'

function Suggestions({ suggestions, onSelect }) {
  if (!suggestions?.length) return null

  return (
    <HStack spacing={2} wrap="wrap">
      {suggestions.map((suggestion, index) => (
        <Button
          key={index}
          size="sm"
          variant="outline"
          onClick={() => onSelect(suggestion)}
        >
          {suggestion}
        </Button>
      ))}
    </HStack>
  )
}

export default Suggestions
