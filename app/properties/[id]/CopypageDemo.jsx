// Server side components by default
'use client'

import {
  useRouter,
  useParams,
  useSearchParams,
  usePathname,
} from 'next/navigation'
// useRouter this is onlty for clinet components

const PropertPage = () => {
  const params = useParams()
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathName = usePathname()
  console.log(params)
  //   console.log(router) // see the functions

  return (
    <div>
      {/* {pathName} */}
      {/* get the params  */}
      {/* http://localhost:3000/properties/1?name=brad */}
      {/* Prorpert Page id {searchParams.get('name')} */}

      {/* <button onClick={() => router.replace('/')}> Home </button> */}

      {/* params oly for clinet component  */}
      {/*   console.log(params) // see the functions */}
    </div>
  )
}

export default PropertPage
