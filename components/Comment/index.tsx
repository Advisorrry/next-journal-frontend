import React from 'react'
import Image from 'next/image'
import { formatRelative, subDays } from 'date-fns'
import styles from './Comment.module.scss'
import { Typography, IconButton, Menu, MenuItem, Paper } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

interface CommentPostProps {
  text: string
  user: {
    fullname: string
    avatarUrl: string
  }
  createdAt: Date | number
}

export const Comment: React.FC<CommentPostProps> = ({ user, text, createdAt }) => {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget)
    console.log(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={styles.comment}>
      <div className={styles.userInfo}>
        <div className={styles.img}>
          <Image src={user.avatarUrl} alt="Avatar" width="84px" height="84px" />
        </div>
        <b>{user.fullname}</b>
        <span>{formatRelative(subDays(createdAt, 3), new Date())}</span>
      </div>
      <Typography className={styles.text}>{text}</Typography>
      <span className={styles.replyBtn}>Ответить</span>
      <IconButton onClick={handleClick}>
        <MoreHorizIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        elevation={2}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        keepMounted>
        <MenuItem onClick={handleClose}>Удалить</MenuItem>
        <MenuItem onClick={handleClose}>Редактировать</MenuItem>
      </Menu>
    </div>
  )
}
