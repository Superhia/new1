import { useState } from 'react'
import {
  Box,
  Container,
  VStack,
  Input,
  Button,
  Text,
  Flex,
} from '@chakra-ui/react'

function Chat() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (!input.trim()) return
    
    setMessages([...messages, { text: input, sender: 'user' }])
    setInput('')
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "Je suis là pour vous aider dans votre recherche. Êtes-vous un candidat ou un recruteur ?",
        sender: 'ai'
      }])
    }, 1000)
  }

  return (
    <Container maxW="container.md" h="calc(100vh - 100px)">
      <VStack h="full" spacing={4}>
        <Box
          flex={1}
          w="full"
          overflowY="auto"
          p={4}
          borderWidth={1}
          borderRadius="md"
        >
          {messages.map((msg, idx) => (
            <Flex
              key={idx}
              justify={msg.sender === 'user' ? 'flex-end' : 'flex-start'}
              mb={4}
            >
              <Box
                bg={msg.sender === 'user' ? 'blue.500' : 'gray.200'}
                color={msg.sender === 'user' ? 'white' : 'black'}
                p={3}
                borderRadius="lg"
                maxW="80%"
              >
                <Text>{msg.text}</Text>
              </Box>
            </Flex>
          ))}
        </Box>
        <Flex w="full" gap={2}>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Écrivez votre message..."
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <Button colorScheme="blue" onClick={handleSend}>
            Envoyer
          </Button>
        </Flex>
      </VStack>
    </Container>
  )
}

export default Chat
