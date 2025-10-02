import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const goToProduct = () => navigate("/product/101");

  return (
    <div>
      <h1>Trang Home</h1>
      <button onClick={goToProduct}>Xem sản phẩm 101</button>
    </div>
  );
}
