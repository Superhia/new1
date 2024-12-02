import { Box, Flex, Button, Heading } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

function Navbar() {
  return (
    <Box bg="brand.500" px={4} color="white">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Heading size="md" as={RouterLink} to="/">
          Recrutement Diversité
        </Heading>
        <Flex gap={4}>
          <Button as={RouterLink} to="/chat" colorScheme="whiteAlpha">
            Commencer
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar
