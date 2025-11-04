import { useState, useCallback } from 'react';

export default function useErrors() {
  const [errors, setErrors] = useState([]);

  const setError = useCallback(({ field, message }) => {
    const errorAlreadyExist = errors.find((error) => error.field === field);

    if (errorAlreadyExist) {
      return;
    }

    setErrors((prevState) => [
      ...prevState,
      { field, message },
    ]);
  }, [errors]);

  const removeError = useCallback((fieldName) => {
    setErrors((prevState) => prevState.filter(
      (error) => error.field !== fieldName,
    ));
  }, []);

  const getErrorMessageByFieldName = useCallback((fieldName) => (
    errors.find((error) => error.field === fieldName)?.message
  ), []);

  return {
    setError, removeError, getErrorMessageByFieldName, errors,
  };
}
