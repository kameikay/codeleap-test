import Head from "next/head";
import React, { useCallback, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { NewPost } from "../../components/NewPost";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Post } from "../../components/Post";
import { api } from "../../services/api";
import { RootObject } from "../../types/Post.types";
import { Container } from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Router from "next/router";

export default function Home() {
  const [page, setPage] = useState<number>(0);
  const username = useSelector((state: RootState) => state.username);

  const getData = useCallback(async () => {
    const { data } = await api.get<RootObject>(
      `/?limit=10&offset=${page * 10}`
    );

    return data;
  }, [page]);

  const { isLoading, isError, data, isFetching, refetch } = useQuery(
    ["posts", page],
    () => getData(),
  );

  useEffect(() => {
    refetch();
  }, []);

  return (
    <>
      <Head>
        <title>CodeLeap Network | Home</title>
      </Head>
      <Header />

      <Container>
        <NewPost />

        <div className="pagination">
          {page < 3 ? (
            <>
              {page === 0 ? (
                <></>
              ) : (
                <Button onClick={() => setPage(page - 1)}>
                  <MdKeyboardArrowLeft />
                </Button>
              )}
              <Button onClick={() => setPage(0)} isSelected={page === 0}>
                1
              </Button>
              <Button onClick={() => setPage(1)} isSelected={page === 1}>
                2
              </Button>
              <Button onClick={() => setPage(2)} isSelected={page === 2}>
                3
              </Button>
              <Button onClick={() => setPage(page + 1)}>
                <MdKeyboardArrowRight />
              </Button>
            </>
          ) : (
            <>
              <Button onClick={() => setPage(page - 1)}>
                <MdKeyboardArrowLeft />
              </Button>
              <Button onClick={() => setPage(page - 1)}>{page}</Button>
              <Button isSelected>{page + 1}</Button>
              {!data?.next ? (
                <></>
              ) : (
                <>
                  <Button onClick={() => setPage(page + 1)}>{page + 2}</Button>

                  <Button onClick={() => setPage(page + 1)}>
                    <MdKeyboardArrowRight />
                  </Button>
                </>
              )}
            </>
          )}
        </div>
        {isError ? (
          <p>Something went wrong...</p>
        ) : isLoading || isFetching ? (
          <Loading />
        ) : (
          data?.results.map((result) => (
            <Post
              key={result.id}
              id={result.id}
              title={result.title}
              created_datetime={result.created_datetime}
              username={result.username}
              content={result.content}
            />
          ))
        )}
      </Container>
    </>
  );
}
