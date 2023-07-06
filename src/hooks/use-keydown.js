import React from 'react';

function useKeydown(key, callback) {
  const keyHandler = React.useCallback(
    (event) => {
      if (event.key === key) {
        callback();
      }
    },
    [key, callback]
  );

  React.useEffect(() => {
    document.addEventListener('keydown', keyHandler, false);

    return () => {
      document.removeEventListener('keydown', keyHandler, false);
    };
  }, [keyHandler]);

  return null;
}

export default useKeydown;
