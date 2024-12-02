import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

function Home() {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} textAlign="center">
        <Heading size="2xl">
          Trouvez votre match professionnel avec l'IA
        </Heading>
        <Text fontSize="xl">
          Une nouvelle approche du recrutement, sans inscription, guidée par l'intelligence artificielle
        </Text>
        <Button
          as={RouterLink}
          to="/chat"
          size="lg"
          colorScheme="blue"
          px={8}
        >
          Démarrer la discussion
        </Button>
      </VStack>
    </Container>
  )
}

export default Home
