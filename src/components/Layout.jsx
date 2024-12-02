import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function Layout() {
  return (
    <Box minH="100vh">
      <Navbar />
      <Box as="main" p={4}>
        <Outlet />
      </Box>
    </Box>
  )
}

export default Layout
