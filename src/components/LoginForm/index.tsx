import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import type { Usuario } from '../../App';

type Props = {
    handleLogin: (user: Usuario) => void;
}

const LoginForm = ({ handleLogin }: Props) => {

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        onSubmit: values => {
            handleLogin({
                username: values.username,
                password: values.password
            })
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <h2 className='marginBotton'>Olá! <br /> Seja bem vindo de volta!</h2>
            <p className='marginBotton'>Faça seu login agora</p>
            <div className='inputs-usuario'>
                <TextField
                    id="username"
                    name="username"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    label="username"
                    variant="standard"
                    fullWidth
                />
                <TextField
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    label="password"
                    variant="standard"
                    fullWidth
                />
            </div>
            <div className='marginBotton'></div>
            <Button variant="contained" type='submit'>Login</Button>
        </form>
    )
}

export { LoginForm }