import { Link, Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'absolut',
            top: '0px'
        }}>
            <div style={{
                display: 'flex',
                gap: '10px',
                justifyContent: 'center',
                margin: '20px 0'
            }}>
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/contact'}>Contact</Link>
                <Link to={'/form'}>Form</Link>
                <Link to={'/Data'}>Data</Link>
            </div>

            <div style={{ width: '100%', maxWidth: '800px' }}>
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;
