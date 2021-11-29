import React from 'react'
import { Dialog, DialogContent, DialogContentText, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import styles from './AuthForm.module.scss'

interface AuthDialogProps {
  onClose: () => void
  visible: boolean
}

export const AuthForm: React.FC<AuthDialogProps> = ({ onClose, visible }) => {

  return (
    <Dialog open={visible} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogContent>
        <DialogContentText>
          <div className={styles.content}>
            <Typography className={styles.title}>
              Войдите в TJ
            </Typography>
            <Typography>Вы сможете комментировать статьи, сохранять материалы и проходить бесплатные курсы</Typography>
          </div>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  )
}
