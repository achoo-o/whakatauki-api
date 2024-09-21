export default function Nav() {
  return (
    <div className="min-w-64 p-10 bg-blue-950 leading-loose hidden lg:flex opacity-95">
      <ul className="fixed text-white font-semibold min-w-44">
        <li className="my-5 hover:text-blue-100">
          <a href="#endpoint">Requests & Endpoint</a>
        </li>
        <li className="my-5 hover:text-blue-100">
          <a href="#data">Data Structure</a>
        </li>
        <li className="my-5 hover:text-blue-100">
          <a href="#tags">Tags</a>
        </li>
        <li className="my-5 hover:text-blue-100">
          <a href="#cors">CORS Restrictions</a>
        </li>
      </ul>
    </div>
  )
}