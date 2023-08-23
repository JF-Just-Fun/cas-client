import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertColor, AlertProps } from '@mui/material/Alert';
import { createPortal } from 'react-dom';
import { forwardRef, useState } from 'react';

export default function useAlert() {
  const [alertContent, setAlertContent] = useState('');
  const [open, setOpen] = useState(false);
  const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const [severity, setSeverity] = useState<AlertColor>('error');

  const AlertMessage = () => {
    return createPortal(
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
      >
        <Alert severity={severity}>{alertContent}</Alert>
      </Snackbar>,
      window.document.body,
    );
  };

  const showAlert = (val: string, type?: AlertColor) => {
    if (type) {
      setSeverity(type);
    }
    setAlertContent(val);
    setOpen(true);
  };

  return { showAlert, AlertMessage };
}
