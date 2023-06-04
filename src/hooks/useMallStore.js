import { useEffect } from 'react';

import useForceUpdate from './useForceUpdate';

import { mallStore } from '../stores/MallStore';

export default function useMallStore() {
  const forceUpdate = useForceUpdate();
  // TODO: 변경사항을 구독

  useEffect(() => {
    mallStore.subscribe(forceUpdate);

    return () => mallStore.unsubscribe(forceUpdate);
  }, [forceUpdate]);

  return mallStore;
}
