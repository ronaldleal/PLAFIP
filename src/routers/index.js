import Header from '../templates/Headers'
import Error404 from '../pages/Error404'
import Personaje from '../pages/personaje'


const rutas={
    '/': Header,
    '/:id': Personaje
}

const router = async ()=>{
    const header = null || document.getElementById('header');

    header.innerHTML= await Header();
}

export default router;