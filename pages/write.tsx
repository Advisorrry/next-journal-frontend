import React from 'react'
import { NextPage } from 'next'
import { MainLayout } from '../layouts/MainLayout'
import { WriteForm } from '../components/WriteForm'

const writePage: NextPage = () => {
    return (
       <MainLayout hideComments hideMenu className="main-layout-white">
           <WriteForm />
       </MainLayout>
    )
}



export default writePage

