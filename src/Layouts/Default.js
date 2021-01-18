import Navbar from '../components/navbar/Navbar';

export default function Layout (props) {
    return(
        <>
        <Navbar />
        <div className='container mt-5'>
            {props.children}
        </div>
        </>
    )
}