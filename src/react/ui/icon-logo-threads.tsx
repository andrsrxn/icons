import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTEyIDIxYzQuMTQyIDAgNy41LTQuMDMgNy41LTlTMTYuMTQyIDMgMTIgM2MtNC4xNDIgMC03LjUgNC4wMy03LjUgOXMzLjM1OCA5IDcuNSA5WiIgb3BhY2l0eT0iLjIiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTE4Ljc1IDcuMjhDMTcuOCA0LjgwOCAxNS44MDMgMyAxMiAzYy02IDAtNy41IDQuNS03LjUgOVM2IDIxIDEyIDIxYzQuNSAwIDYuNzUtMyA2Ljc1LTUuMjUgMC0yLjIyLTEuMzM2LTMuNjItMy4wMTgtNC4yNzJtMCAwQzEyLjg2OCAxMC4zNjYgOSAxMS40MTUgOSAxNC4yNSA5IDE4IDE1Ljc1IDE4IDE1Ljc1IDEyYzAtLjE4LS4wMDYtLjM1NC0uMDE4LS41MjJabTAgMEMxNS4zOTQgNi43NTMgMTAuNDQ4IDYuODI4IDkgOSIvPjwvc3ZnPg==)
 */
export const IconLogoThreads: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-logo-threads'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M12 21c4.142 0 7.5-4.03 7.5-9S16.142 3 12 3c-4.142 0-7.5 4.03-7.5 9s3.358 9 7.5 9Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M18.75 7.28C17.8 4.808 15.803 3 12 3c-6 0-7.5 4.5-7.5 9S6 21 12 21c4.5 0 6.75-3 6.75-5.25 0-2.22-1.336-3.62-3.018-4.272m0 0C12.868 10.366 9 11.415 9 14.25 9 18 15.75 18 15.75 12c0-.18-.006-.354-.018-.522Zm0 0C15.394 6.753 10.448 6.828 9 9'
      />
    </svg>
  )
}
