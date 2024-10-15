// Server side components by default
// useRouter this is onlty for clinet components

const PropertPage = ({ params, searchParams }) => {
  return (
    <div>
      <div>Property Page Id : = {params.id}</div>
      {/* <div>Search Params : = {searchParams.name}</div> */}
    </div>
  )
}

export default PropertPage
