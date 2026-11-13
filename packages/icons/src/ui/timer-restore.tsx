import type { Icon } from './types'

export const IconTimerRestore: Icon = ({
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
      data-slot='icon-ui-timer-restore'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <ellipse opacity='.2' cx='12' cy='13.14' rx='9.16' ry='9.08' fill='currentColor' />
      <path d='M16.74 1.79H7.26' stroke='currentColor' />
      <path d='m14.37 10.82-2.96 2.96' stroke='currentColor' />
      <path d='M2.82 6.52v1.2c0 1.12 0 1.68.34 2.03s.91.35 2.04.35h1.2' stroke='currentColor' />
      <path
        d='M5.03 18.89a9.08 9.08 0 1 0 7.03-14.82c-5.02 0-7.33 3.99-8.37 5.4'
        stroke='currentColor'
      />
    </svg>
  )
}
