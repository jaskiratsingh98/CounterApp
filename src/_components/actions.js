export const handleCountUp = () => {
  return {
    type: 'COUNT_UP',
  };
}


export const handleCountDown = () => {
  return {
    type: 'COUNT_DOWN',
  };
}

export const handleCountReset= () => {
  return {
    type: 'RESET'
  }
}