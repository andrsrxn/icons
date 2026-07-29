import type { Icon } from '../types'

export const IconLogoPaypal: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='logo-paypal'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M16.171 7.858H11.34a.69.69 0 0 0-.67.523l-1.035 4.142a.69.69 0 0 1 .67-.523h3.105a4.142 4.142 0 0 0 4.136-3.909 4.163 4.163 0 0 0-1.375-.233Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M8.516 17a.69.69 0 0 1-.67.522H5.127a.69.69 0 0 1-.67-.857L7.565 4.24a.69.69 0 0 1 .67-.523h5.176a4.142 4.142 0 0 1 0 8.283h-3.106a.69.69 0 0 0-.667.523l-1.121 4.476Zm0 0-.604 2.425a.69.69 0 0 0 .667.858h2.718a.69.69 0 0 0 .67-.523l.776-3.096a.69.69 0 0 1 .667-.522h2.761a4.142 4.142 0 0 0 0-8.284H11.34a.69.69 0 0 0-.67.523l-1.035 4.142'
      />
    </svg>
  )
}
