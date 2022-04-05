import { useState } from "react";

interface IErrorProps {
  fieldName: string;
  message: string;
}

export function useError() {
  const [errors, setErrors] = useState<IErrorProps[]>([]);

  function setError({ fieldName, message }: IErrorProps) {
    const errorAlreadyExists = errors.find(
      (error) => error.fieldName === fieldName
    );

    if (errorAlreadyExists) return;

    setErrors((prevState) => [...prevState, { fieldName, message }]);
  }

  function removeError(fieldName: string) {
    setErrors((prevState) =>
      prevState.filter((error) => error.fieldName !== fieldName)
    );
  }

  function getErrorMessageByFieldName(fieldName: string) {
    return errors.find(error => error.fieldName === fieldName)?.message;
  }

  return {
    errors,
    setError,
    removeError,
    getErrorMessageByFieldName
  }
}
