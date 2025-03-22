const photoTexts = [
  "Essa foi nossa primeira foto juntos. Cada um com o que mais gosta, eu com você, e você com o doce.",
  "Aqui foi quando eu te dei seu primeiro buquê de flores. Acho que você gostou um pouquinho. Saiba que foi o primeiro de muitos.",
  "Aqui não preciso nem falar, sua primeira corrida, e a primeira que vejo você correr. E nossa, não sei descrever o quanto fiquei orgulhoso de você, que apesar de tudo, do cansaço, da sua cabeça pensando milhões de coisas, você foi lá e fez, não desistiu, e fez muito bem, pegando até troféu, não consigo expressar o quanto fiquei orgulhoso de você.",
  "Essa foi de quando a gente conheceu uma das maravilhas do mundo, o creme de ovomaltine. E que doce bom ein, e fica melhor ainda com você do lado.",
  "Você sempre muito fofa, e besta me eu sempre muito bobo, mas acho que é por isso que a gente se dá tão bem, você me completa, e eu te completo, e juntos podemos chegar onde quisermos.",
  "Com que eu vou explicar, que você é a pessoa perfeita, que eu amo sua companhia, que eu amo o seu jeito, amo o seu sorriso, que você me faz tão bem, como explicar o tanto que eu estou feliz por ter uma mulher foda do meu lado. \nSó quero dizer obrigado, por ser essa pessoa tão extraordinária, que com um sorriso , um carinho, uma mensagem que me manda, você muda o meu dia completamente, obrigado por em tão pouco tempo você mudar minha vida. \nEu te prometo cuida de você e dar meu máximo para te ver feliz, porque te ver feliz, me deixa muito feliz.\n Você é o amor da minha vida ",
];

import React, { useState, useEffect, useRef } from "react";
import HeartRain from "./heartRain";
import aa from "./assets/musica.mp3";
import foto1 from "./assets/1.jpeg";
import foto2 from "./assets/2.jpeg";
import foto3 from "./assets/3.jpeg";
import foto4 from "./assets/4.jpeg";
import foto5 from "./assets/5.jpeg";

function App() {
  const photos = [foto1, foto2, foto3, foto4, foto5, " "];
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const [typedText, setTypedText] = useState("");

  const startDate = new Date("2025-02-22T00:00:00");
  const [timeString, setTimeString] = useState("");
  const [years, days, months, hours, minutes, seconds] = timeString.split(",");

  const updateTimer = () => {
    const now = new Date();
    let diff = now.getTime() - startDate.getTime();

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    diff -= years * (1000 * 60 * 60 * 24 * 365);

    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    diff -= months * (1000 * 60 * 60 * 24 * 30);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);

    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);

    const minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * (1000 * 60);

    const seconds = Math.floor(diff / 1000);

    setTimeString(`${years},${days},${months},${hours},${minutes},${seconds}`);
  };

  useEffect(() => {
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    updateTimer();
  }, []);

  useEffect(() => {
    setTypedText("");

    const currentText = photoTexts[currentPhotoIndex];
    let charIndex = -1;

    const intervalId = setInterval(() => {
      if (charIndex < currentText.length - 1) {
        setTypedText((prev) => prev + currentText[charIndex]);
        charIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [currentPhotoIndex]);

  const handlePhotoClick = () => {
    handleUserInteraction();
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [audioStarted, setAudioStarted] = useState(false);

  const handleUserInteraction = () => {
    if (!audioStarted && audioRef.current) {
      audioRef.current.play();
      setAudioStarted(true);
    }
  };

  return (
    <>
      <HeartRain />

      <div
        className="relative min-h-screen flex flex-col items-center text-center py-8"
        onClick={handleUserInteraction}
      >
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-pink-600">Nosso Amor</h1>
        </header>

        <section
          className="flex flex-col items-center justify-center"
          onClick={handlePhotoClick}
        >
          {currentPhotoIndex < photos.length - 1 && (
            <img
              src={photos[currentPhotoIndex]}
              alt="Foto especial"
              style={{ width: "340px", height: "auto" }}
              className="mx-4 rounded-lg shadow-lg cursor-pointer"
            />
          )}

          <p
            className="mt-4 text-white font-bold text-center"
            style={{
              fontWeight: "bold",
              maxWidth: "358px",
              wordWrap: "break-word",
            }}
          >
            {typedText.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        </section>
        <section style={{ marginBottom: "1rem" }}>
          <h2
            style={{
              fontSize: "1.25rem",
              color: "#ec4899",
            }}
          >
            Nosso amor começou há:
          </h2>

          <div
            style={{
              width: "58px",
              backgroundColor: "rgba(156,163,175,0.25)",
              padding: "0 20px",
              margin: "0 auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "48px",
                height: "54px",
                backgroundColor: "rgba(182, 192, 207, 0.5)",
                border: "1px solid #9ca3af",
                borderRadius: "6px",
                boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
                padding: "5px",
              }}
            >
              <span style={{ fontSize: "0.875rem", color: "#4b5563" }}>
                Anos
              </span>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#1f2937",
                }}
              >
                {years || 0}
              </span>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "48px",
                height: "54px",
                backgroundColor: "rgba(182, 192, 207, 0.5)",
                border: "1px solid #9ca3af",
                borderRadius: "6px",
                boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
                padding: "5px",
              }}
            >
              <span style={{ fontSize: "0.875rem", color: "#4b5563" }}>
                Meses
              </span>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#1f2937",
                }}
              >
                {months || 0}
              </span>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "48px",
                height: "54px",
                backgroundColor: "rgba(182, 192, 207, 0.5)",
                border: "1px solid #9ca3af",
                borderRadius: "6px",
                boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
                padding: "5px",
              }}
            >
              <span style={{ fontSize: "0.875rem", color: "#4b5563" }}>
                Dias
              </span>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#1f2937",
                }}
              >
                {days || 0}
              </span>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "48px",
                height: "54px",
                backgroundColor: "rgba(182, 192, 207, 0.5)",
                border: "1px solid #9ca3af",
                borderRadius: "6px",
                boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
                padding: "5px",
              }}
            >
              <span style={{ fontSize: "0.875rem", color: "#4b5563" }}>
                Horas
              </span>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#1f2937",
                }}
              >
                {hours || 0}
              </span>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "48px",
                height: "54px",
                backgroundColor: "rgba(182, 192, 207, 0.5)",
                border: "1px solid #9ca3af",
                borderRadius: "6px",
                boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
                padding: "5px",
              }}
            >
              <span style={{ fontSize: "0.875rem", color: "#4b5563" }}>
                Minutos
              </span>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#1f2937",
                }}
              >
                {minutes || 0}
              </span>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "48px",
                height: "54px",
                backgroundColor: "rgba(182, 192, 207, 0.5)",
                border: "1px solid #9ca3af",
                borderRadius: "6px",
                boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
                padding: "5px",
              }}
            >
              <span style={{ fontSize: "0.875rem", color: "#4b5563" }}>
                Segundos
              </span>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#1f2937",
                }}
              >
                {seconds || 0}
              </span>
            </div>
          </div>
        </section>
        <audio ref={audioRef} src={aa} style={{ display: "none" }} />
      </div>
    </>
  );
}

export default App;
