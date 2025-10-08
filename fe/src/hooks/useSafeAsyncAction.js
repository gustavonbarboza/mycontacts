import { useCallback } from 'react';
import useIsMounted from './useIsMounted';

export default function useSafeAsyncAction() {
  const isMouted = useIsMounted();

  const runSafeAsyncAction = useCallback((callback) => {
    if (isMouted()) {
      callback();
    }
  }, [isMouted]);

  return runSafeAsyncAction;
}
