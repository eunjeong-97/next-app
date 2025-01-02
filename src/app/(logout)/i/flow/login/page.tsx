import Image from "next/image";

import zlogo from "@/../public/zlogo.png";

export default function LoginPage() {
  return (
    <div>
      i/flow/login 페이지
      <Image src={zlogo} alt="logo" />
    </div>
  );
}
