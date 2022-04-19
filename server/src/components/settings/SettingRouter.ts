import { Router } from 'express'
import Controller from './SettingsController'
const controller = new Controller()
const settingRouter: Router = Router()

settingRouter.get('/', controller.index)
settingRouter.post('/', controller.store)

export default settingRouter
