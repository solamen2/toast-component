import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function openToast(message, variant) {
    const newToasts = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message: message,
        variant: variant,
      },
    ];
    setToasts(newToasts);
  }

  function closeToast(id) {
    setToasts(toasts.filter((toast) => toast.id !== id));
  }

  const toastValue = {
    toasts,
    openToast,
    closeToast,
  };

  return (
    <ToastContext.Provider value={toastValue}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
