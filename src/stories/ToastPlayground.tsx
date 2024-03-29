import React, { useState } from 'react';

import { withToast5 } from '../withToast5';
import { useToast5 } from '../hooks/useToast5';
import { TOAST_VARIANTS } from '../constants';

interface ToastPlaygroundProps {
  /**
   * Is this the principal call to action on the page?
   */
  toastType?: 'info' | 'error' | 'success';
}

/**
 * Create all 3 types of toasts
 */
export const ToastPlayground = withToast5(({
  toastType,
}: ToastPlaygroundProps) => {
  const { addToast } = useToast5(); 
  let backgroundColor = toastType === 'error' ? 'red' : 'blue';
  if(toastType === 'success') backgroundColor = 'green';

  const [message, setMessage] = useState('Toast Message');
  let variant = toastType === 'error' ? TOAST_VARIANTS.ERROR : TOAST_VARIANTS.INFO;
  if(toastType === 'success') variant = TOAST_VARIANTS.SUCCESS;

  return (
    <div style={{minHeight: '80vh', display: 'flex', alignContent: 'center', justifyContent: 'center', flexDirection: 'column'}}>
      <input style={{ padding: '0.5rem 0.75rem' }} value={message} onChange={e => setMessage(e.target.value)} placeholder='Toast message'/>
      <button
        type="button"
        style={{ backgroundColor, border: 0, color: 'white', padding: '1rem 2rem', cursor: 'pointer' }}
        onClick={() => addToast({message: message + ' ' + +new Date(), variant})}
      >
        Add Toast
      </button>
    </div>
  );
});
