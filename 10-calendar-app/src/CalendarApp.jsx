import { NextUIProvider } from '@nextui-org/react'
import { I18nProvider } from "@react-aria/i18n";
import Router from './app/routes/Router'

export default function CalendarApp() {
  return (
    <NextUIProvider>
      <I18nProvider locale="es-MX-u-ca-gregory">
        <Router />
      </I18nProvider>
    </NextUIProvider>
  )
}
