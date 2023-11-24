import { json, type DataFunctionArgs } from "@remix-run/node";
import { getParams } from "remix-params-helper";
import { z } from "zod";

import { useLoaderData } from "@remix-run/react";

export async function loader({ params }: DataFunctionArgs) {
  const id = getParams(params, z.object({ id: z.string() }));
  return json({ id });
}

export default function Component() {
  const loaderData = useLoaderData<typeof loader>();

  return (
    <div>
      <pre>{JSON.stringify(loaderData, null, 2)}</pre>
    </div>
  );
}
