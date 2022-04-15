import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { addMoney, deleteMoney } from "../redux/action-creators/account";

export default function Home() {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  const actionCreators = bindActionCreators(
    { addMoney, deleteMoney },
    dispatch
  );

  return (
    <div className="main">
      <span>{account}</span>
      <button onClick={() => actionCreators.addMoney(1000)}>ADD</button>
      <button onClick={() => actionCreators.deleteMoney(1000)}>DELETE</button>
    </div>
  );
}
