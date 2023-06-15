import { useEffect, useState } from 'react';

import { useLocalStorage } from 'usehooks-ts';

import { useNavigate } from 'react-router-dom';

import useMallStore from '../hooks/useMallStore';

import Orders from '../components/Orders';

import Pagination from '../components/Pagination';

export default function OrdersPage() {
  const mallStore = useMallStore();

  const navigate = useNavigate();

  const [accessToken] = useLocalStorage('accessToken', '');

  const [page, setPage] = useState('');

  useEffect(() => {
    if (!accessToken) {
      navigate('/login');
      return;
    }

    mallStore.fetchOrders(page);
    mallStore.fetchAccount();
  }, [page]);

  const { totalPages } = mallStore;

  const moveToPage = (clickedPage) => {
    navigate(`?page=${clickedPage}`);
  };

  return (
    <div>
      <Orders />
      <Pagination totalPages={totalPages} onClick={moveToPage} setPage={setPage} />
    </div>
  );
}
