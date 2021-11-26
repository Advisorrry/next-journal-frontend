import React from 'react'
import clsx from 'clsx'
import styles from './WriteForm.module.scss'
import { Input } from '@mui/material'

interface WriteFormProps {
  title?: string
}

export const WriteForm: React.FC<WriteFormProps> = ({ title }) => {
  return (
    <div>
      <Input classes={{root: styles.titleField} } placeholder="Заголовок" defaultValue={title}></Input>
    </div>
  )
}
