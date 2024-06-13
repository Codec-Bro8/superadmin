import React from 'react';
import { Editable, EditableInput, EditablePreview, EditableProps as ChakraEditableProps } from '@chakra-ui/react';

interface EditableBoxProps extends ChakraEditableProps {
}

const EditableBox: React.FC<EditableBoxProps> = (props) => {
  return (
    <Editable {...props} isDisabled border='1px solid #373535' borderRadius='8px' bg='#202020' p='2rem'>
      <EditablePreview />
      <EditableInput />
    </Editable>
  );
}

export default EditableBox;
