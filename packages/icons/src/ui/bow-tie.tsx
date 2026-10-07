import type { Icon } from './types'

export const IconBowTie: Icon = ({
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
      data-slot='icon-ui-bow-tie'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M2.03 8.63c0-.94 0-1.41.3-1.7.29-.3.76-.3 1.7-.3h1c.34 0 .5 0 .67.06.16.05.3.16.56.37l2.38 1.89c.38.3.56.44.66.65.1.2.1.44.1.92v3.4c0 .49 0 .74-.1.95s-.31.36-.71.65l-2.34 1.72c-.27.2-.4.3-.55.34s-.31.05-.64.05H4.03c-.94 0-1.41 0-1.7-.3-.3-.28-.3-.76-.3-1.7z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M22.1 9.37c0-1.16 0-1.74-.3-2.14a2 2 0 0 0-.3-.3c-.4-.3-.98-.3-2.14-.3-.42 0-.63 0-.83.06l-.17.06c-.2.08-.36.21-.7.47l-1.8 1.43c-.55.44-.83.66-.98.97s-.15.67-.15 1.38v2.4c0 .75 0 1.12.16 1.44s.46.54 1.06.98l1.73 1.27c.33.25.5.37.69.44l.13.05c.2.05.4.05.82.05 1.2 0 1.8 0 2.2-.32q.14-.11.26-.25c.32-.4.32-1 .32-2.2z'
        fill='currentColor'
      />
      <path
        d='m14.46 14.34 2.5 2.04c1.61 1.33 2.42 2 3.49 1.62 1.06-.38 1.24-1.25 1.6-2.98a15 15 0 0 0 0-6.03c-.35-1.73-.53-2.6-1.6-2.98s-1.87.3-3.49 1.64l-2.5 2.07'
        stroke='currentColor'
      />
      <path
        d='M9.6 14.34 7.08 16.4c-1.57 1.29-2.36 1.94-3.44 1.54-1.07-.39-1.22-1.24-1.53-2.93a17 17 0 0 1 0-6.04c.3-1.68.45-2.53 1.53-2.92s1.86.26 3.43 1.56l2.53 2.1'
        stroke='currentColor'
      />
      <rect
        width='6.64'
        height='5.04'
        rx='2'
        transform='matrix(0 -1 -1 0 14.52 15.32)'
        stroke='currentColor'
      />
      <path d='M7.12 12h1.94' stroke='currentColor' />
      <path d='M14.94 12h1.94' stroke='currentColor' />
    </svg>
  )
}
