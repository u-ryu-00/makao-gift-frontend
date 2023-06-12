import { useEffect } from 'react';

import { useLocalStorage } from 'usehooks-ts';
import { useNavigate } from 'react-router-dom';
import useMallStore from '../hooks/useMallStore';

import Orders from '../components/Orders';

export default function OrdersPage() {
  const mallStore = useMallStore();

  const navigate = useNavigate();

  const [accessToken] = useLocalStorage('accessToken', '');

  useEffect(() => {
    if (!accessToken) {
      navigate('/login');
      return;
    }

    mallStore.fetchOrders();
    mallStore.fetchAccount();
  }, []);

  return (
    <Orders />
  );
}
