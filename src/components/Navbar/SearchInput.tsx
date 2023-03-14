import React from 'react';
import { SearchIcon } from "@chakra-ui/icons";
import { Flex, Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react';

type SearchInputProps = {

};

const SearchInput:React.FC<SearchInputProps> = () => {
    return (
        <Flex flexGrow={1} mr={2} align='center'>
            <Stack spacing={4}>
            <InputGroup>
                <InputLeftElement
                pointerEvents='none'
                // eslint-disable-next-line react/no-children-prop
                children={<SearchIcon color='gray.300' mb={1} />}
            />
                <Input 
                    type='tel' 
                    placeholder='Search Reddit' 
                    fontSize='10pt' 
                    _placeholder={{ color: 'gray.500'}}
                    _hover={{
                        bg: 'white',
                        border: '1px solid',
                        bordercolor: 'blue.500'
                    }}
                    _focus={{
                        outline: 'none',
                        border: '1ps solid',
                        borderColor: 'blue.500'
                    }}
                    height="34px"
                    bg="gray.50"
                />
            </InputGroup>
            </Stack>
        </Flex>
    )
}

export default SearchInput