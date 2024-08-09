import {
  Card,
  Input,
  Button,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [ name, setName ] =  useState('');

  const handleLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || "/";
    login(name);
    navigate(lastPath, {replace: true});
  };

  

  return (
    <section className="px-8">
      <div className="container mx-auto h-screen grid place-items-center">
        <Card
          className="px-10 py-16 md:px-24 md:py-14 border border-gray-300"
        >
          <CardHeader shadow={false} floated={false} className="text-center">
            <Typography
              variant="h1"
              color="blue-gray"
              className="mb-4 !text-3xl lg:text-4xl"
            >
              Inicia Sesión
            </Typography>
            <Typography className="!text-gray-600 text-[18px] font-normal md:max-w-sm">
              Comienza a administrar a tus héroes 😉
            </Typography>
          </CardHeader>
          <CardBody>
            <form
              action="#"
              className="flex flex-col gap-4 md:mt-5"
              onSubmit={(e) => {
                e.preventDefault();
                handleLogin();
              }}
            >
              <div>
                <label htmlFor="email">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="block font-medium mb-2"
                  >
                    Tu Nombre
                  </Typography>
                </label>
                <Input
                  id="name"
                  color="gray"
                  size="lg"
                  type="name"
                  name="name"
                  placeholder="Mauricio Carrillo"
                  className="w-full placeholder:opacity-100 focus:!border-t-gray-900"
                  value={name}
                  onChange={({target}) => setName(target.value)}
                />
              </div>
              <Button onClick={handleLogin} size="lg" color="gray" fullWidth>
                Iniciar Sesión
              </Button>
              <Typography
                variant="small"
                className="text-center mx-auto max-w-[19rem] !font-medium !text-gray-600"
              >
                Al iniciar sesión, estás de acuerdo con nuestros{" "}
                <a href="#" className="text-gray-900">
                  Términos del Servicio
                </a>{" "}
                y{" "}
                <a href="#" className="text-gray-900">
                  Políticas de Privacidad
                </a>
              </Typography>
            </form>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}