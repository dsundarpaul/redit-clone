import { auth } from '@/firebase/client.App'
import { Flex, Image } from '@chakra-ui/react'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import RightContent from './RightContent/RightContent'
import SearchInput from './SearchInput'

const Navbar:React.FC = () => {
    const [user, loading, error] = useAuthState(auth)
    return (
        <Flex bg="white" height='44px' padding='6px 12px'>
            <Flex>
                <Image src="/images/redditFace.svg" alt='' height="38px" />
                <Image 
                    src="/images/redditText.svg" 
                    alt='' 
                    height="46px" 
                    display={{ base: 'none', md: 'unset' }} 
                />
            </Flex>
            <SearchInput />
            <RightContent user={user} auth={auth} />
        </Flex>
    )
}

export default Navbar 