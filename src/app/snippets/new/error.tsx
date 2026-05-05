'use client';

type props = {
  error: Error;
  reset: () => void;
};

export default function ErrorPage({ error }: props) {
  return <div>{error.message}</div>;
}
