import React from 'react'
import clsx from 'clsx'
import styles from './WriteForm.module.scss'
import { Button, Input } from '@mui/material'
import dynamic from 'next/dynamic'

const Editor = dynamic(() => import('../Editor'), { ssr: false })

interface WriteFormProps {
  title?: string
}

export const WriteForm: React.FC<WriteFormProps> = ({ title }) => {
  return (
    <div>
      <Input
        classes={{ root: styles.titleField }}
        placeholder="Заголовок"
        defaultValue={title}></Input>
      <div className={styles.editor}>
        <Editor />
      </div>
      <Button variant="contained" color="primary">
        Опубликовать
      </Button>
    </div>
  )
}
