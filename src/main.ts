import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	app.enableCors({
		origin: 'https://dietolog-2-0-client-fspccclh3-gallahar.vercel.app',
	})
	app.setGlobalPrefix('api')
	await app.listen(5000)
}
bootstrap()
