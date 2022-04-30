import { useState, useEffect } from 'react'
import { getAuth } from 'firebase/auth'

function Profile() {
  const [user, setUser] = useState(null)

  const auth = getAuth()
  useEffect(() => {
    setUser(auth.currentUser)
  }, [])

  return user ? <h2>Welcome {user.displayName}</h2> : 'Not Logged In'
}

export default Profile
