import type { Icon } from './types'

export const IconFolderControls: Icon = ({
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
      data-slot='icon-ui-folder-controls'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='m17.95 18.06.86-1.2h1.73l1.7 2.18V14.1c0-2.98 0-4.46-.75-5.5a4 4 0 0 0-.92-.93c-1.04-.75-2.53-.75-5.5-.75h-.17c-.99 0-1.48 0-1.95-.11a4 4 0 0 1-.85-.31c-.43-.22-.8-.54-1.56-1.18a9 9 0 0 0-1.56-1.18 4 4 0 0 0-.84-.31c-.47-.11-.96-.11-1.95-.11h-.8a3.7 3.7 0 0 0-3.72 3.71v4.76c0 3.77 0 5.65 1.17 6.83s3.06 1.17 6.83 1.17h8.52zm-1.89-3.28c-.9 0-1.73-.75-1.73-1.65s.83-1.66 1.73-1.66 1.73.76 1.73 1.66-.83 1.65-1.73 1.65'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M10.5 20.18h-.83c-3.77 0-5.66 0-6.83-1.17-1.17-1.18-1.17-3.06-1.17-6.83V6.4a2.57 2.57 0 0 1 2.57-2.57h2.2c.66 0 .98 0 1.3.05a4 4 0 0 1 1.6.62c.26.18.5.4.98.85s.72.67.98.84a4 4 0 0 0 1.6.63c.3.05.64.05 1.3.05h5.04a3 3 0 0 1 3 3'
        stroke='currentColor'
      />
      <path d='M21.9 13.42h-4.21' stroke='currentColor' />
      <path d='M13.77 18.6h4.2' stroke='currentColor' />
      <path d='M14.43 13.42h-1.32' stroke='currentColor' />
      <path d='M21.22 18.6h1.35' stroke='currentColor' />
      <circle cx='16.06' cy='13.42' r='1.63' stroke='currentColor' />
      <circle cx='19.59' cy='18.6' r='1.63' stroke='currentColor' />
    </svg>
  )
}
