import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => {
  // Call styles once to create the styles object for the given size
  const buttonStyles = styles(size);


  return (
    <TouchableOpacity style={buttonStyles.radius} onPress={props.onPress}>
      <Text style={buttonStyles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: '#fff',
      borderWidth: 2,
    },
    text: { color: '#fff', fontSize: size / 3 },
  });


// import React from 'react';
// import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// export const RoundedButton = ({
//   style = {},
//   textStyle = {},
//   size = 125,
//   ...props
// }) => {
//   return (
//     <TouchableOpacity style={[styles(size).radius, style]} onPress={props.onPress}>
//       <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
//     </TouchableOpacity>
//   );
// };

// const styles = (size) =>
//   StyleSheet.create({
//     radius: {
//       borderRadius: size / 2,
//       width: size,
//       height: size,
//       alignItems: 'center',
//       justifyContent: 'center',
//       borderColor: '#fff',
//       borderWidth: 2,
//     },
//     text: { color: '#fff', fontSize: size / 3 },
//   });
