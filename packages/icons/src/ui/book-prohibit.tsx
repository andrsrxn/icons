import type { Icon } from './types'

export const IconBookProhibit: Icon = ({
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
      data-slot='icon-ui-book-prohibit'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <circle cx='12' cy='10.12' r='4.05' stroke='currentColor' />
      <path d='m9.19 7.3 5.62 5.63' stroke='currentColor' />
      <path
        opacity='.2'
        d='M20.98 9.74c0-3.77 0-5.66-1.17-6.83s-3.06-1.17-6.83-1.17h-1.96c-3.77 0-5.66 0-6.83 1.17S3.02 5.97 3.02 9.74v8.75h9.96c3.77 0 5.66 0 6.83-1.17s1.17-3.05 1.17-6.83zM12 14.17a4.05 4.05 0 1 1 0-8.1 4.05 4.05 0 0 1 0 8.1'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M3.02 18.5h9.96c3.77 0 5.66 0 6.83-1.18 1.17-1.17 1.17-3.05 1.17-6.83v-.75c0-3.77 0-5.66-1.17-6.83s-3.06-1.17-6.83-1.17h-1.96c-3.77 0-5.66 0-6.83 1.17S3.02 5.97 3.02 9.74z'
        stroke='currentColor'
      />
      <path
        d='M3.02 18.5c0 .7 0 1.07.06 1.36a3 3 0 0 0 2.34 2.34c.3.06.65.06 1.37.06h8.1c1.42 0 2.12 0 2.68-.23a3 3 0 0 0 1.6-1.6c.24-.56.24-1.27.24-2.69'
        stroke='currentColor'
      />
    </svg>
  )
}
