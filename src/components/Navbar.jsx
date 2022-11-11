import logo from '../assets/logo.svg';

export default function Navbar() {
  return (
    <div className='flex justify-between'>
        <img src={logo} alt="logo" />
        <ul className=''>
            <li>Home</li>
            <li>Place to stay</li>
            <li>NFTs</li>
            <li>Community</li>
        </ul>
        <a href="">Connect wallet</a>
    </div>
  )
}
