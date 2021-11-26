import React from 'react'
import { Button } from '@mui/material'
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'

import styles from './FollowButton.module.scss'

export const FollowButton: React.FC = () => {
  const [followed, setFollowed] = React.useState(false)

  return (
    <Button
      onClick={() => setFollowed(!followed)}
      variant="contained"
      style={{ minWidth: 30, width: 35, height: 30 }}>
      {!followed ? (
        <AddOutlinedIcon />
      ) : (
        <CheckOutlinedIcon style={{ fontSize: 20, color: '#2ea83a' }} />
      )}
    </Button>
  )
}
