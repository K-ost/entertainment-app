import { Snackbar, SnackbarContent } from '@mui/material'

interface IToast {
  close?: () => void
  message: string
  show: boolean
}

const Toast: React.FC<IToast> = ({ close, message, show }) => {
  return (
    <Snackbar
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      autoHideDuration={5000}
      open={show}
      onClose={close}
    >
      <SnackbarContent
        style={{
          background: 'var(--color-semi-dark)',
          color: 'var(--color-white)'
        }}
        message={message}
      />
    </Snackbar>
  )
}

export default Toast
