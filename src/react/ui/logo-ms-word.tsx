import type { Icon } from './types'

export const IconLogoMsWord: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='logo-ms-word'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M13.565 7.244H4.733a.68.68 0 0 0-.68.68v8.152c0 .375.305.68.68.68h8.832a.68.68 0 0 0 .68-.68V7.924a.68.68 0 0 0-.68-.68Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M14.244 9.283H19m-4.756 5.434H19M6.771 7.244V4.527a.68.68 0 0 1 .68-.68h10.87a.68.68 0 0 1 .679.68v14.946a.68.68 0 0 1-.68.68H7.45a.679.679 0 0 1-.679-.68v-2.717m0-6.794 1.02 4.076 1.358-2.717 1.359 2.717 1.019-4.076M4.733 7.244h8.832a.68.68 0 0 1 .68.68v8.152a.68.68 0 0 1-.68.68H4.733a.68.68 0 0 1-.68-.68V7.924a.68.68 0 0 1 .68-.68Z'
      />
    </svg>
  )
}
