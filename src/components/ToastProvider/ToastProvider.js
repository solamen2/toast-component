import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState('notice');
  const [toasts, setToasts] = React.useState([]);

  function handleForm(event) {
    event.preventDefault();
    const newToasts = [...toasts];
    newToasts.push({
      id: crypto.randomUUID(),
      variant: variant,
      message: message,
    });
    setToasts(newToasts);

    setMessage('');
    setVariant('notice');
  }

  function closeToast(id) {
    setToasts(toasts.filter((toast) => toast.id !== id));
  }

  const toastValue = {
    message,
    setMessage,
    variant,
    setVariant,
    toasts,
    handleForm,
    closeToast,
  };

  return (
    <ToastContext.Provider value={toastValue}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
