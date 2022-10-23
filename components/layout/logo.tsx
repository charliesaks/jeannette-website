import Image from "next/image";

function Logo() {
  return (
    <div>
      <Image
        src="/images/site/logo.png"
        alt="Jeannette Trevias' Logo"
        width={60}
        height={40}
      />
    </div>
  );
}

export default Logo;
