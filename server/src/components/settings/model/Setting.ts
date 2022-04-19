import { model, Schema } from 'mongoose'
import ISetting from './ISetting'
import SettingScope from './SettingScope'

const settingSchema: Schema = new Schema(
    {
        title: { type: String, required: true },
        key: { type: String, required: true },
        value: { type: String, required: true },
        scope: { type: Number, default: SettingScope.PRIVATE, required: true },
        version: { type: String, required: true }
    }
)

export default model<ISetting>('Setting', settingSchema)