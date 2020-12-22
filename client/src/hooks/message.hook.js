import { useCallback } from 'react';

export default function useMessage() {
  return useCallback((text) => {
    if (window.M && text) {
      window.M.toast({ html: text });
    }
  }, []);
}
