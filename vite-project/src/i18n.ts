import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      pt: {
        translation: {
          welcome: 'Bem-vindo',
          login: 'Entrar',
          logout: 'Sair',
          email: 'Email',
          password: 'Senha',
          loggingIn: 'Entrando...',
          loggingOut: 'Saindo...',
          forgotPassword: 'Esqueci minha senha',
          welcomeUser: 'Bem-vindo, {{name}}!',
          errors: {
            userNotFound: 'Usuário não encontrado',
            wrongPassword: 'Senha incorreta',
            invalidEmail: 'E-mail inválido',
            invalidCredentials: 'Credenciais inválidas',
            genericError: 'Erro ao fazer login. Tente novamente',
          },
        },
      },

      en: {
        translation: {
          welcome: 'Welcome',
          login: 'Login',
          logout: 'Logout',
          email: 'Email',
          password: 'Password',
          loggingIn: 'Logging in...',
          loggingOut: 'Logging out...',
          forgotPassword: 'Forgot password',
          welcomeUser: 'Welcome, {{name}}!',
          errors: {
            userNotFound: 'User not found',
            wrongPassword: 'Incorrect password',
            invalidEmail: 'Invalid email',
            invalidCredentials: 'Invalid credentials',
            genericError: 'Login error. Try again',
          },
        },
      },

      es: {
        translation: {
          welcome: 'Bienvenido',
          login: 'Iniciar sesión',
          logout: 'Salir',
          email: 'Correo',
          password: 'Contraseña',
          loggingIn: 'Entrando...',
          loggingOut: 'Saliendo...',
          forgotPassword: 'Olvidé mi contraseña',
          welcomeUser: '¡Bienvenido, {{name}}!',
          errors: {
            userNotFound: 'Usuario no encontrado',
            wrongPassword: 'Contraseña incorrecta',
            invalidEmail: 'Correo inválido',
            invalidCredentials: 'Credenciales inválidas',
            genericError: 'Error al iniciar sesión',
          },
        },
      },
    },
  })

export default i18n