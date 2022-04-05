import React from "react";
import Lottie from "react-lottie";
import loading from "../../utils/lottieAnimations/loading.json";
import { Container } from "./styles";

const loadingOptions = {
  loop: true,
  autoplay: true,
  animationData: loading,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
export function Loading() {
  return (
    <Container>
      <Lottie
        options={loadingOptions}
        width={160}
        height={160}
        isStopped={false}
        isPaused={false}
      />
      <h4>Loading...</h4>
    </Container>
  );
}
