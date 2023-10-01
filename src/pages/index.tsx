import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    if (router.isReady) {
      router.push('authentication/login')
    }
  }, [router])

  return null
}
