import React from 'react';

function useKeydownHook(key, action) {
  const keyHandler = React.useCallback(
    (event) => {
      if (event.key === key) {
        action();
      }
    },
    [key, action]
  );

  React.useEffect(() => {
    document.addEventListener('keydown', keyHandler, false);

    return () => {
      document.removeEventListener('keydown', keyHandler, false);
    };
  }, [keyHandler]);

  return null;
}

export default useKeydownHook;
