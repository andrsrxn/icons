import type { Icon } from './types'

export const IconFileCamera: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-file-camera'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M11.78 22.26c-3.77 0-5.65 0-6.82-1.17-1.18-1.17-1.18-3.05-1.18-6.83v-4.5c0-3.74 0-5.61 1.16-6.78S7.97 1.8 11.7 1.75l1.7-.01v6.8h6.78l.04 7.13-1.86-1.15-3.45-.13-.9 1.03-2.03.4v6.44z'
        fill='currentColor'
      />
      <path
        d='M20.18 11.21v-.09c0-1.66 0-2.5-.32-3.24-.31-.75-.9-1.33-2.1-2.49l-.58-.56-.84-.84c-.97-.97-1.45-1.45-2.05-1.75l-.47-.19c-.62-.21-1.3-.21-2.68-.21-3.15 0-4.72 0-5.8.83a4 4 0 0 0-.72.72c-.84 1.08-.84 2.65-.84 5.8v8.39c0 .64 0 .96.04 1.22a4 4 0 0 0 3.42 3.43c.27.03.6.03 1.23.03'
        stroke='currentColor'
      />
      <path
        d='M13.2 2.35v2.46c0 1.89 0 2.83.58 3.42.59.58 1.53.58 3.42.58h2.46'
        stroke='currentColor'
      />
      <path
        d='M16.6 14.18h1.03c.48 0 .92.25 1.16.66l.04.06c.22.37.62.6 1.05.6.9 0 1.63.72 1.63 1.62v2.91l-.01.49a2 2 0 0 1-1.78 1.77l-.48.01h-5.77a2 2 0 0 1-1.78-1.78v-3.4c0-.9.72-1.63 1.62-1.63.43 0 .83-.23 1.05-.6l.03-.05c.24-.4.68-.66 1.15-.66z'
        stroke='currentColor'
      />
      <circle cx='16.59' cy='18.77' r='1.42' stroke='currentColor' />
    </svg>
  )
}
