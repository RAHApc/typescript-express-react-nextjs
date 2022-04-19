import React, { useState, useEffect } from 'react'
import Content from '../partials/Content'
import { FormControl, TextField, Grid, Checkbox, FormControlLabel, Button, FormLabel, RadioGroup, Radio } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Section from '../partials/Section'
import HttpService from '../../services/Http'
import SettingScope from './SettingScope'

const useStyles = makeStyles((theme:Theme) => createStyles({
  formRow: {
    margin: theme.spacing(2, 'auto')
  }
}))
interface CouponRules {
  user:string
  maxPrice:number
  minPrice:number
  firstPurchase:boolean
}
export default function NewSetting () {
  const styles = useStyles()
  const httpService = React.useMemo(() => (new HttpService()), [])
  const [title, setTitle] = useState<string>('')
  const [key, setKey] = useState<string>('')
  const [value, setValue] = useState<string>('')
  const [scope, setScope] = useState<string>('0')
  const [version, setVersion] = useState<string>('')
  const updateScope = (e:React.ChangeEvent<HTMLInputElement>) => {
    setScope(e.target.value)
  }
  const saveSetting = (e:React.MouseEvent) => {
    httpService.post('/api/v1/settings', {
      title,
      key,
      value,
      version,
      scope
    })
      .then(response => {})
      .catch(error => console.log(error))
  }
  return (
    <Content title="ایجاد تنظیمات ">
      <Grid container xs={12} md={6} lg={6} >
        <FormControl fullWidth className={styles.formRow}>
          <TextField
            variant="outlined" id="title" name="title"
            label="عنوان"
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
            required/>
        </FormControl >
        <FormControl fullWidth className={styles.formRow}>
          <TextField
            variant="outlined" id="key" name="key"
            label="کلید"
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => setKey(e.target.value)}
            required/>
        </FormControl >
        <FormControl fullWidth className={styles.formRow}>
          <TextField
            variant="outlined" id="value" name="value" label="مقدار"
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
            required
          />
        </FormControl >
        <FormControl fullWidth className={styles.formRow}>
          <TextField
            variant="outlined" id="version" name="version" label="نسخه"
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => setVersion(e.target.value)}
            required
          />
        </FormControl >
        <FormControl fullWidth className={styles.formRow}>
          <FormLabel component="legend">نوع</FormLabel>
          <RadioGroup aria-label="gender" name="gender1" value={scope} onChange={updateScope}>
            <FormControlLabel value="0" control={<Radio />} label="عمومی" />
            <FormControlLabel value="1" control={<Radio />} label="خصوصی" />
          </RadioGroup>
        </FormControl >
        <Button variant="contained" onClick={saveSetting} color="primary">ذخیره تنظیمات</Button>

      </Grid>
    </Content>
  )
}
