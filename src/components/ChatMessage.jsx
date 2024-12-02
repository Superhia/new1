import { Box, Text, Flex } from '@chakra-ui/react'

function ChatMessage({ message, sender }) {
  return (
    <Flex
      justify={sender === 'user' ? 'flex-end' : 'flex-start'}
      mb={4}
    >
      <Box
        bg={sender === 'user' ? 'blue.500' : 'gray.200'}
        color={sender === 'user' ? 'white' : 'black'}
        p={3}
        borderRadius="lg"
        maxW="80%"
      >
        <Text>{message}</Text>
      </Box>
    </Flex>
  )
}

export default ChatMessage
