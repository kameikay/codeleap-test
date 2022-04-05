import type { AppProps } from "next/app";
import { QueryClientProvider, QueryClient } from "react-query";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import store from "../redux/store";
import { GlobalStyles } from "../styles/global";
import { theme } from "../styles/theme/default";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
