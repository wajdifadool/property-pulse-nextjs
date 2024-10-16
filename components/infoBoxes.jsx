import Image from 'next/image'
import Link from 'next/link'
import InfoBox from './InfoBox'

const InfoBoxes = () => {
  return (
    <div>
      <section>
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <InfoBox
              heading="For Renters"
              // no need  to add the other props
              // because we have default
              buttonInfo={{
                text: 'Browse Properties',
                link: '/properties',
                btn_bg_color: 'bg-black',
              }}>
              {/* we  ould pass it as prop or as children  */}
              {/* evrey thing wraped like so is a children */}
              {/* if its like this <InfoBox  desc="xxx"/>  then its a prop  */}
              Find your dream rental property. Bookmark properties and contact
              owners.
            </InfoBox>
            <InfoBox
              heading="For Property Owners"
              // /
              backgroundColor="bg-blue-100"
              buttonInfo={{
                text: 'Add Property',
                link: '/properties/add',
                btn_bg_color: 'bg-blue-500',
              }}>
              List your properties and reach potential tenants. Rent as an
              airbnb or long term.
            </InfoBox>
            {/* <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold">For Renters</h2>
              <p className="mt-2 mb-4">
                Find your dream rental property. Bookmark properties and contact
                owners.
              </p>
              <Link
                href="/properties"
                className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700">
                Browse Properties
              </Link>
            </div> */}
            {/* <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold">For Property Owners</h2>
              <p className="mt-2 mb-4">
                List your properties and reach potential tenants. Rent as an
                airbnb or long term.
              </p>
              <Link
                href="/properties/add"
                className="inline-block bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600">
                Add Property
              </Link>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default InfoBoxes
