import type { Icon } from './types'

export const IconDistort: Icon = ({
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
      data-slot='icon-ui-distort'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M13.58 21.58c3.77 0 5.66 0 6.83-1.17s1.17-3.06 1.17-6.83v-3.16c0-3.77 0-5.66-1.17-6.83s-3.06-1.17-6.83-1.17h-3.16c-3.77 0-5.66 0-6.83 1.17s-1.17 3.06-1.17 6.83v3.16c0 3.77 0 5.66 1.17 6.83s3.06 1.17 6.83 1.17z'
        fill='currentColor'
      />
      <path
        d='M8.88 2.42S7.23 4.99 7.65 8.94c.27 2.55 1.03 5.72 1.23 7.47.37 3.14 0 5.17 0 5.17'
        stroke='currentColor'
      />
      <path
        d='M14.53 21.58s1.66-2.57 1.24-6.52c-.28-2.55-1.03-5.72-1.24-7.47-.36-3.14 0-5.17 0-5.17'
        stroke='currentColor'
      />
      <path
        d='M21.58 8.04s-2.57 1.65-6.52 1.23C12.51 9 9.34 8.24 7.6 8.04c-3.14-.37-5.17 0-5.17 0'
        stroke='currentColor'
      />
      <path
        d='M2.42 14.82s2.57 1.66 6.52 1.24c2.55-.27 5.72-1.03 7.47-1.24 3.14-.36 5.17 0 5.17 0'
        stroke='currentColor'
      />
      <path
        d='M2.42 13.58v-3.16c0-3.77 0-5.66 1.17-6.83s3.06-1.17 6.83-1.17h3.16c3.77 0 5.66 0 6.83 1.17s1.17 3.06 1.17 6.83v3.16c0 3.77 0 5.66-1.17 6.83s-3.06 1.17-6.83 1.17h-3.16c-3.77 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83'
        stroke='currentColor'
      />
    </svg>
  )
}
