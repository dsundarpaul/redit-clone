import AuthModal from '@/components/Modal/Auth/AuthModal'
import { Button, Flex } from '@chakra-ui/react'
import React from 'react'
import AuthButtons from './AuthButtons'
import { signOut } from 'firebase/auth'
import { auth } from '@/firebase/client.App'

type RightContentProps = {
    user: any
    auth: any
}

const RightContent:React.FC<RightContentProps> = ({ user }) => {
    return (
        <>
        <AuthModal />
        <Flex justify='center' align='center'>
            {
                user ? 
                <Button onClick={() => signOut(auth)}>
                    Logout
                </Button> : <AuthButtons />
            }
        </Flex>
        </>
    )
}

export default RightContent