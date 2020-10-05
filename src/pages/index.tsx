import { useEffect, useState } from "react";
import registry from "../../registry.json";

const Index = () => {
  console.log(registry);
  const [isDark, setIsDark] = useState(true);
  useEffect(() => {
    setIsDark(
      window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  }, []);

  return (
    <>
      {registry.map((module) => (
        <>
          <h2>{module.name}</h2>
          <img
            src={isDark ? "/logo_dark.svg" : "/logo_light.svg"}
            height="20px"
          />{" "}
          <img
            src={isDark ? "/deno_dark.svg" : "/deno_light.svg"}
            height="20px"
          />
        </>
      ))}
    </>
  );
};

export default Index;
