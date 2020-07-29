import React from 'react';
import { Link } from 'react-router-dom'
import PageDefault from '../../../components/PageDefault'

function CadastroVideo() {
    return (
        <PageDefault>
            <h1>Registration Video</h1>
            <Link to='/cadastro/category'>
                Register Category
            </Link>
        </PageDefault>
    )
}

export default CadastroVideo;