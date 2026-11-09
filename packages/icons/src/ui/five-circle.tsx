import type { Icon } from './types'

export const IconFiveCircle: Icon = ({
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
      data-slot='icon-ui-five-circle'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <circle opacity='.2' cx='12' cy='12' r='10.22' fill='currentColor' />
      <circle cx='12' cy='12' r='10.22' stroke='currentColor' />
      <path
        d='M14.71 6.98H9.94a.5.5 0 0 0-.5.44l-.35 3.26c-.04.42.44.73.84.6 2.02-.7 5.09-.4 5.09 2.51 0 4.04-4.73 3.89-6.04 1.76'
        stroke='currentColor'
      />
    </svg>
  )
}
