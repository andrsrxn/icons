import type { Icon } from './types'

export const IconLogoMsExcel: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='logo-ms-excel'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M13.984 7.21H5.089a.684.684 0 0 0-.684.685v8.21c0 .378.306.684.684.684h8.895a.684.684 0 0 0 .684-.684v-8.21a.684.684 0 0 0-.684-.684Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M14.668 9.263h4.79m-4.79 5.474h4.79M7.141 7.21V4.474a.684.684 0 0 1 .684-.685h10.947a.684.684 0 0 1 .684.685v15.052a.684.684 0 0 1-.684.684H7.826a.684.684 0 0 1-.684-.684V16.79m6.158 0v3.42m0-16.42v3.42M7.826 9.948l3.421 4.106m0-4.106-3.421 4.106M5.089 7.21h8.895c.378 0 .684.306.684.684v8.21a.684.684 0 0 1-.684.684H5.089a.684.684 0 0 1-.684-.684v-8.21c0-.378.306-.684.684-.684Z'
      />
    </svg>
  )
}
