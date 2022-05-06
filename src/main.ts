import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true, // ignorar  propiedades no eperadas en los endpoints
      forbidNonWhitelisted: true, // devolver un status error al recibir propiedades no esperadas (opcional)
      transformOptions: {
        // conversion de argumentos api
        enableImplicitConversion: true,
      },
    }),
  );

  await app.listen(AppModule.serverPort, () => {
    console.log('✅✅ Servidor corriendo en puerto: ', AppModule.serverPort);
  });
}
bootstrap();
