import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Container } from "./styles";

export function Header() {
  const username = useSelector((state: RootState) => state.username);

  return (
    <Container>
      <Image
        src="/images/codeleap_logo_white.webp"
        alt="CodeLeap Network"
        height={124}
        width={450}
      />

      {username.username && (
        <p>
          Welcome, <span>{username.username}</span>
        </p>
      )}
      {!username.username && (
        <p>
          Please,{" "}
          <Link href="/">
            <a>
              <span>Signup</span>
            </a>
          </Link>
          !
        </p>
      )}
    </Container>
  );
}
