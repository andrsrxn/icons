import type { Icon } from '../types'

export const IconTextHeading: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='text-heading'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M7 3.797v-.75.75Zm-.75 16.406a.75.75 0 0 0 1.5 0h-1.5Zm10 0a.75.75 0 0 0 1.5 0h-1.5ZM5.53 3.047a.75.75 0 1 0 0 1.5v-1.5Zm3.01 1.5a.75.75 0 0 0 0-1.5v1.5Zm6.955-1.5a.75.75 0 0 0 0 1.5v-1.5Zm3.01 1.5a.75.75 0 0 0 0-1.5v1.5ZM5.53 19.453a.75.75 0 0 0 0 1.5v-1.5Zm3.01 1.5a.75.75 0 1 0 0-1.5v1.5Zm6.955-1.5a.75.75 0 0 0 0 1.5v-1.5Zm3.01 1.5a.75.75 0 1 0 0-1.5v1.5ZM7 3.797h-.75V12h1.5V3.797H7ZM7 12h-.75v8.203h1.5V12H7Zm0 0v.75h10v-1.5H7V12Zm10 0h-.75v8.203h1.5V12H17Zm0 0h.75V3.797h-1.5V12H17ZM5.53 3.797v.75H7v-1.5H5.53v.75Zm1.47 0v.75h1.54v-1.5H7v.75Zm8.495 0v.75H17v-1.5h-1.505v.75Zm1.505 0v.75h1.505v-1.5H17v.75ZM5.53 20.203v.75h3.01v-1.5H5.53v.75Zm9.965 0v.75h3.01v-1.5h-3.01v.75Z'
      />
    </svg>
  )
}
