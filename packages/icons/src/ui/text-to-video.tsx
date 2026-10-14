import type { Icon } from './types'

export const IconTextToVideo: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-text-to-video'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M16.49 8.14c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12v.13c0 2.82 0 4.24-.88 5.12s-2.3.88-5.12.88h-.13c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12v-.13c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88zm-.6 3.06a1.51 1.51 0 0 0-2.29 1.3v3.62a1.38 1.38 0 0 0 2.15 1.15L19.2 15a1.1 1.1 0 0 0-.05-1.88z'
        fill='currentColor'
      />
      <rect
        width='12.12'
        height='12.12'
        rx='3'
        transform='matrix(0 -1 -1 0 22.49 20.27)'
        stroke='currentColor'
      />
      <path
        d='M13.7 14.2c0-1.62 0-2.43.38-2.86q.34-.36.84-.47c.56-.1 1.25.32 2.64 1.17 1.28.78 1.92 1.17 2.09 1.7q.15.46 0 .93c-.17.52-.81.91-2.1 1.7-1.38.84-2.07 1.27-2.63 1.16a1.5 1.5 0 0 1-.84-.47c-.39-.43-.39-1.24-.39-2.86'
        stroke='currentColor'
      />
      <path d='M5.6 3.73v10.1' stroke='currentColor' />
      <path d='M7.27 13.84H3.92' stroke='currentColor' />
      <path
        d='M9.69 4.91c0-.65-.53-1.18-1.18-1.18H2.69c-.65 0-1.18.53-1.18 1.18'
        stroke='currentColor'
      />
    </svg>
  )
}
