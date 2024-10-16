import Image from 'next/image'
import Link from 'next/link'

const InfoBox = ({
  heading,
  backgroundColor,
  buttonInfo,
  textColor,
  children,
  //
}) => {
  return (
    <div>
      <div class={`${backgroundColor} p-6 rounded-lg shadow-md`}>
        <h2 class={`${textColor} text-2xl font-bold`}>{heading}</h2>
        <p class={`${textColor} mt-2 mb-4`}>{children}</p>
        <Link
          href={buttonInfo.link}
          class={`${buttonInfo.btn_bg_color} inline-block text-white rounded-lg px-4 py-2 hover:bg-gray-700`}>
          {buttonInfo.text}
        </Link>
      </div>
    </div>
  )
}

InfoBox.defaultProps = {
  backgroundColor: 'bg-gray-100',
  textColor: 'text-gray-800',
}

export default InfoBox
