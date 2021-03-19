import { INestApplication } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import request from 'supertest'

import { AppModule } from '../src/app.module'

describe('AppController (e2e)', () => {
  let app: INestApplication

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule]
    }).compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  test('/ (GET)', async () => {
    const response = await request(app.getHttpServer()).get('/')

    expect(response.status).toEqual(200)
    expect(response.text).toEqual('Hello World!')
  })
})
