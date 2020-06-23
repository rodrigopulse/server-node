import { Router } from 'express'

import UserController from './constrollers/UserController'

const routes = Router()

routes.get('/users', UserController.index)
routes.post('/users', UserController.create)

export default routes
