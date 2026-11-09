import type { Icon } from './types'

export const IconActivitySquare: Icon = ({
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
      data-slot='icon-ui-activity-square'
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
        d='M5.63 12.1h1.19c.32 0 .48 0 .6-.09.13-.08.2-.23.32-.53l1.38-3.26c.5-1.15.74-1.73 1.1-1.7s.5.64.8 1.86l1.76 7.39c.28 1.16.42 1.75.78 1.78.35.04.6-.5 1.1-1.6l1.52-3.28c.13-.28.2-.42.32-.5s.27-.08.59-.08h1.28'
        stroke='currentColor'
      />
      <path
        d='M2.42 13.58v-3.16c0-3.77 0-5.66 1.17-6.83s3.06-1.17 6.83-1.17h3.16c3.77 0 5.66 0 6.83 1.17s1.17 3.06 1.17 6.83v3.16c0 3.77 0 5.66-1.17 6.83s-3.06 1.17-6.83 1.17h-3.16c-3.77 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83'
        stroke='currentColor'
      />
    </svg>
  )
}
