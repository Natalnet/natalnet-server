import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('NatalNet main server')
  .setDescription('Servidor central para gerenciar os acessos à rede de laboratório NatalNet')
  .setVersion('0.0.1')
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000, () => {
    console.log('[natalnet-server] listening on port 3000 ✨');
  })
}
bootstrap();
