import { useParams } from "react-router";

export function Product() {
  const paramsMap = useParams();

  console.log(paramsMap);

  return <div>Product page</div>;
}
