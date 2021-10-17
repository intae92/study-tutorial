import { useHelloState } from "./HelloContext";

export default function Hello() {
  const context = useHelloState();
  return <h1>Hello world{context.value}</h1>;
}
