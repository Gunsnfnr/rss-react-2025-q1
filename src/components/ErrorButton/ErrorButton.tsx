import { useState } from 'react';

const ErrorButton = () => {
  const [isError, setIsError] = useState(false);
  const handleClick = () => {
    setIsError(true);
  };

  if (isError) throw new Error('Test error text message.');

  return (
    <button type="button" onClick={handleClick}>
      Error button
    </button>
  );
};

export { ErrorButton };
