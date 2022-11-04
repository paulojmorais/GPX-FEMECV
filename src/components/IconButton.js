
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const IconButton = ({hide=false, onPress, title=null, icon=null, style, size=14}) => {

  if (hide) return null;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={style}>
      {icon != null && <FontAwesomeIcon icon={['fas', icon]} size={size}/>}
      {title != null && <Text>{title}</Text>}
    </TouchableOpacity>
  );
}

export default IconButton;