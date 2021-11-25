import React from 'react'
import clsx from 'clsx'
import styles from './WriteForm.module.scss'

interface WriteFormProps {
  title: string
}

export const WriteForm: React.FC<WriteFormProps> = ({ title }) => {
  return (
    // vscode сдох, надо линукс переустановить, а то место кончилось. ему не хватает
    // <div>
    //   <Input classNames={{root: styles.titleField} } placeholder="Заголовок"></Input>
    // </div>
  )
}
