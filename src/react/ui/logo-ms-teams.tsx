import type { Icon } from './types'

export const IconLogoMsTeams: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='logo-ms-teams'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M12.483 7.666h-8a.667.667 0 0 0-.667.667v8c0 .368.299.666.667.666h8a.667.667 0 0 0 .667-.666v-8a.667.667 0 0 0-.667-.667Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M13.15 9h3.333m0 0a.667.667 0 0 1 .667.666v6a4.667 4.667 0 0 1-9.14 1.333m8.473-8h2.938a.395.395 0 0 1 .395.395v4.939a2.667 2.667 0 0 1-2.666 2.666c-.065 0-.129 0-.192-.006m-.475-7.994a2 2 0 1 0-1.434-3.394m-5.233 4.728H7.15m1.333 4v-4m1.69-2.667a2.667 2.667 0 1 1 2.977 1.25m-8.667-1.25h8c.368 0 .667.298.667.667v8a.667.667 0 0 1-.667.666h-8a.667.667 0 0 1-.667-.666v-8c0-.369.299-.667.667-.667Z'
      />
    </svg>
  )
}
