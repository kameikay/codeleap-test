import React, { useState } from "react";
import { useError } from "../../hooks/useError";
import { Button } from "../Button";
import { InputField } from "../InputField";
import { Input } from "../Input";
import { Container, SignupContainer } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../redux/slices/User.slice";
import { RootState } from "../../redux/store";
import { useRouter } from "next/router";

export function Signup() {
  const [username, setUsername] = useState<string>("");
  const { errors, getErrorMessageByFieldName, removeError, setError } =
    useError();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.username);
  const { push } = useRouter();

  if (user.username) {
    push("/home");
  }

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value);

    if (!event.target.value) {
      setError({ fieldName: "username", message: "Username is required" });
    } else {
      removeError("username");
    }
  }

  function handleSignup() {
    if (!username) {
      setError({ fieldName: "username", message: "Username is required" });
    } else {
      removeError("username");

      dispatch(signup({ username }));
    }
  }

  return (
    <Container>
      <SignupContainer>
        <h1>
          Welcome to <span>CodeLeap</span> Network!
        </h1>

        <InputField
          error={getErrorMessageByFieldName("username")}
          label="Please enter your username"
        >
          <Input
            type="text"
            name="username"
            placeholder="John Doe..."
            autoComplete="off"
            value={username}
            onChange={(event) => handleNameChange(event)}
            error={!!getErrorMessageByFieldName("username")}
          />
        </InputField>

        <Button
          type="button"
          disabled={errors.length > 0}
          onClick={() => handleSignup()}
        >
          Enter
        </Button>
      </SignupContainer>
    </Container>
  );
}
