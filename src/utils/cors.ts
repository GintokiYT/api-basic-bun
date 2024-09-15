import cors, { CorsOptions } from 'cors';

const ACCEPTED_ORIGINS: string[] = [
  'http://localhost:3000/',
];

interface CorsMiddlewareOptions {
  acceptedOrigins?: string[];
}

export const corsConfig = ({ acceptedOrigins = ACCEPTED_ORIGINS }: CorsMiddlewareOptions = {}) => {
  const corsOptions: CorsOptions = {
    origin: (origin: string | undefined, cb) => {
      if (!origin) {
        // Si no hay origen (por ejemplo, cuando la solicitud se hace desde la misma red), permitimos el acceso
        return cb(null, true);
      }
      
      // Si el origen está en la lista de aceptados
      if (acceptedOrigins.includes(origin)) {
        return cb(null, true);
      }

      // Si el origen no está permitido, devolvemos un error
      return cb(new Error('Not allowed by CORS'));
    }
  };

  return cors(corsOptions);
};