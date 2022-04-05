import { useUser } from '@auth0/nextjs-auth0'
import type { NextPage } from 'next'



const Home: NextPage = () => {
  const {user} = useUser()
  return (
    <div>
      <div>{JSON.stringify(user, null, 2)}</div>
      <a href="/api/auth/login">Login</a>
    </div>
  )
}

export default Home
