import type { Icon } from './types'

export const IconRss: Icon = ({
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
      data-slot='icon-ui-rss'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M6.13 19.5a1.06 1.06 0 1 1-2.11 0 1.06 1.06 0 0 1 2.11 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M3.47 10.6c1.78.2 4.52 1.01 6.74 3.22a10.8 10.8 0 0 1 3.22 6.74'
        stroke='currentColor'
      />
      <path
        d='M3.33 3.64a19.6 19.6 0 0 1 11.44 5.48 18.3 18.3 0 0 1 5.48 11.44'
        stroke='currentColor'
      />
    </svg>
  )
}
