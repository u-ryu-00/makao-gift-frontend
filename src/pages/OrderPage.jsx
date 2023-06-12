import { useLocalStorage } from 'usehooks-ts';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import PresentForm from '../components/PresentForm';

export default function OrderPage() {
  const [accessToken] = useLocalStorage('accessToken', '');

  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate('/login');
    }
  }, []);

  return (
    <PresentForm />
  );
}
