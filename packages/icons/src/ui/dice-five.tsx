import type { Icon } from './types'

export const IconDiceFive: Icon = ({
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
      data-slot='icon-ui-dice-five'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M13.4 21.4c3.76 0 5.65 0 6.82-1.18 1.17-1.17 1.17-3.06 1.17-6.83v-2.78c0-3.77 0-5.66-1.17-6.83s-3.06-1.17-6.83-1.17h-2.78c-3.77 0-5.66 0-6.83 1.17s-1.17 3.06-1.17 6.83v2.78c0 3.77 0 5.66 1.17 6.83s3.06 1.17 6.83 1.17z'
        fill='currentColor'
      />
      <path
        d='M2.6 13.4v-2.8c0-3.76 0-5.65 1.18-6.82 1.17-1.17 3.06-1.17 6.83-1.17h2.78c3.77 0 5.66 0 6.83 1.17s1.17 3.06 1.17 6.83v2.78c0 3.77 0 5.66-1.17 6.83s-3.06 1.17-6.83 1.17h-2.78c-3.77 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83'
        stroke='currentColor'
      />
      <path
        d='M12.86 12a.86.86 0 1 1-1.72 0 .86.86 0 0 1 1.72 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M17.37 7.38a.85.85 0 1 1-1.7 0 .85.85 0 0 1 1.7 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M17.46 16.62a.85.85 0 1 1-1.71 0 .85.85 0 0 1 1.7 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M8.25 16.62a.85.85 0 1 1-1.7 0 .85.85 0 0 1 1.7 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M8.25 7.38a.85.85 0 1 1-1.7 0 .85.85 0 0 1 1.7 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
