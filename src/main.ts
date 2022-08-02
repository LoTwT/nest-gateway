import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import {
  FastifyAdapter,
  NestFastifyApplication,
} from "@nestjs/platform-fastify"
import { TransformInterceptor } from "./common/interceptors/transform.interceptor"

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  )

  // 统一响应体格式
  app.useGlobalInterceptors(new TransformInterceptor())

  await app.listen(3000)
}
bootstrap()
