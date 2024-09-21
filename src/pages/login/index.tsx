// src/pages/login/index.tsx

import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import { useState } from "react";

// COMPONENTS
import LoginForm from "@/components/Organism/LoginForm/LoginForm";
import CtaButton from "@/components/Atoms/Buttons/CtaButton";
import Loading from "@/components/Atoms/Loading/Loading";

// STYLE
import style from "./login.module.scss";
import Hero from "../../../public/hero.png";

const Login = () => {
  const { loginWithGoogle } = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleGoogleLogin = async () => {
    try {
      setIsLoading(true);
      await loginWithGoogle();
      console.log("Login con Google effettuato con successo!");
      setIsLoading(false);
      router.push("/landing-page");
    } catch (err) {
      setIsLoading(false);
      console.error(err);
    }
  };

  {
    if (isLoading) return <Loading />;
  }

  return (
    <main className={style.main}>
      <div className={style.hero}>
        <Image
          src={Hero}
          alt="Hero image"
          width={545}
          height={204}
          priority={true}
        />
      </div>

      <div className={style.header}>
        <h1>HireGenius</h1>
        <h2>Testa le tue competenze</h2>
      </div>

      <LoginForm />

      <hr />

      <CtaButton
        label="Accedi con Google"
        className="ctaB"
        onClick={handleGoogleLogin}
      />

      <p className={style.register}>
        Non hai un account?{" "}
        <Link className={style.registerLink} href="/register">
          Registrati
        </Link>
      </p>
    </main>
  );
};

export default Login;
