/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div className="grid place-items-center h-screen">
      <div className="h-4/6">
        <h1 className="text-4xl">Oops!</h1>
        <span>Sorry, an unexpected error has occurred.</span>
        <br />
        <i>{error.statusText || error.message}</i>
      </div>
    </div>
  );
}
