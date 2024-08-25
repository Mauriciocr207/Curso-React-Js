export default function getEnv() {
  import.meta.env;

  return {
    ...import.meta.env
  }
}