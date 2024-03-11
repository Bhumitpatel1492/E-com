import React from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';

export function AlertView(props) {
  const {
    showAlert,
    onDismiss,
    title = '',
    message,
    onConfirmPressed,
    showCancelButton,
    cancelButtonColor,
    onCancelPressed,
  } = props;

  return (
    <AwesomeAlert
      show={showAlert}
      showProgress={false}
      title={title}
      message={message}
      closeOnTouchOutside={true}
      closeOnHardwareBackPress={true}
      onCancelPressed={onCancelPressed}
      showCancelButton={showCancelButton}
      showConfirmButton={true}
      confirmText={'OK'}
      confirmButtonColor={'#0096A5'}
      cancelButtonColor={cancelButtonColor}
      onConfirmPressed={onConfirmPressed}
      onDismiss={onDismiss}
      cancelButtonStyle={{
        width: 110,
        height: 40,
        justifyContent: 'center',
        borderRadius: 5,
      }}
      confirmButtonStyle={{
        width: 110,
        height: 40,
        justifyContent: 'center',
        borderRadius: 5,
      }}
      confirmButtonTextStyle={{
        color: '#FFFFFF',
        textAlign: 'center',
        // fontWeight: '400',
        fontSize: 14,
      }}
      cancelButtonTextStyle={{
        color: '#FFFFFF',
        textAlign: 'center',
        // fontWeight: '400',
        fontSize: 14,
      }}
      titleStyle={{
        color: 'Red',
        fontWeight: '700',
        textAlign: 'center',
        fontSize: 19,
      }}
      messageStyle={{
        color: 'black',
        textAlign: 'center',
        // fontWeight: '400',
        fontSize: 14,
      }}
      contentContainerStyle={{
        width: '75%',
        justifyContent: 'center',
      }}
    />
  );
}
