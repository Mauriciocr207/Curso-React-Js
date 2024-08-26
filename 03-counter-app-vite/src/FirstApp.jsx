import { string } from "prop-types";

export default function FirstApp({
  title = "No hay titulo",
  sub = "No hay subtitulo"
}) {
  if(!title) {
    console.error("Not title");
  }
  return (<>
    <h1 data-testid="FirstApp.title">{title}</h1>
    <p data-testid="FirstApp.subtitle">{sub}</p>
    <p data-testid="FirstApp.subtitle">{sub}</p>
  </>)
}

FirstApp.propTypes = {
  title: string.isRequired,
  sub: string.isRequired,
}