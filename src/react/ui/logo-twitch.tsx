import type { Icon } from './types'

export const IconLogoTwitch: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='logo-twitch'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M15.033 16.685H11.26l-4.014 3.123v-3.123H5.239a.694.694 0 0 1-.473-.183.604.604 0 0 1-.196-.442V4.817c0-.166.07-.325.196-.442a.694.694 0 0 1 .473-.183h13.382c.177 0 .347.066.473.183a.605.605 0 0 1 .196.442v8.452a.59.59 0 0 1-.063.265.632.632 0 0 1-.178.215l-3.587 2.791a.703.703 0 0 1-.43.145Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M15.275 7.94v3.748M11.261 7.94v3.748m3.772 4.997H11.26l-4.014 3.123v-3.123H5.239a.694.694 0 0 1-.473-.183.604.604 0 0 1-.196-.442V4.817c0-.166.07-.325.196-.442a.694.694 0 0 1 .473-.183h13.382c.177 0 .347.066.473.183a.605.605 0 0 1 .196.442v8.452a.59.59 0 0 1-.063.265.632.632 0 0 1-.178.215l-3.587 2.791a.703.703 0 0 1-.43.145Z'
      />
    </svg>
  )
}
