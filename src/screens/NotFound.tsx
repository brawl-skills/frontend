import { useEffect } from 'react'
import PageBody from '../components/PageBody'

// Redux Store
import { useMyDispatch } from '../components/storeHooks'
import { setPage } from '../components/slices/pages'

export default function NotFound() {
  const dispatch = useMyDispatch()

  useEffect(() => {
    dispatch(setPage('404'))
  }, [dispatch])
  return <PageBody>404 Error Message</PageBody>
}
