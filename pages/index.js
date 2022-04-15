import { useSelector } from "react-redux";

export default function Home() {
  const account = useSelector((state) => state.account);
  return (
    <div>
      <span>{account}</span>
    </div>
  );
}
