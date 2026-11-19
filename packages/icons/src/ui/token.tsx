import type { Icon } from './types'

export const IconToken: Icon = ({
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
      data-slot='icon-ui-token'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M22.22 12a10.22 10.22 0 1 1-20.44 0 10.22 10.22 0 0 1 20.44 0m-11.29 5.5h2.3l4.25-4.58v-1.76l-4.26-4.47h-2.29l-4.3 4.47v1.76z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <circle cx='12' cy='12' r='10.22' stroke='currentColor' />
      <path
        d='m15.16 8.84-.3-.31C13.5 7.16 12.84 6.47 12 6.47s-1.51.69-2.86 2.06l-.3.3-.31.31C7.16 10.5 6.47 11.16 6.47 12s.69 1.51 2.06 2.86l.3.3.31.31c1.35 1.37 2.02 2.06 2.86 2.06s1.51-.69 2.86-2.06l.3-.3.31-.31c1.37-1.35 2.06-2.02 2.06-2.86s-.69-1.51-2.06-2.86z'
        stroke='currentColor'
      />
    </svg>
  )
}
