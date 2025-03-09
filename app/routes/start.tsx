import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function Start() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/page/1');
  }, [navigate]);

  return <div></div>;
}
