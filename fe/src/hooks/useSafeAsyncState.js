import { useState, useCallback } from 'react';
import useIsMounted from './useIsMounted';

export default function useSafeAsyncState(initialState) {
  const [state, setState] = useState(initialState);

  const isMouted = useIsMounted();

  const setSaveAsyncState = useCallback((data) => {
    if (isMouted()) {
      setState(data);
    }
  }, [isMouted]);

  return [state, setSaveAsyncState];
}
