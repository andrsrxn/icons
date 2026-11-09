import type { Icon } from './types'

export const IconLightbulbOff: Icon = ({
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
      data-slot='icon-ui-lightbulb-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M8.81 19.05c0-.94 0-1.41.3-1.7.29-.3.76-.3 1.7-.3h2.1c.95 0 1.42 0 1.71.3.3.29.3.76.3 1.7v1.26c0 .94 0 1.41-.3 1.7-.29.3-.76.3-1.7.3h-2.1c-.95 0-1.42 0-1.72-.3-.29-.29-.29-.76-.29-1.7z'
        fill='currentColor'
      />
      <path
        d='M5.43 5.44a7 7 0 0 0-.88 3.48c0 2.43 1 4.67 2.77 6.03l.3.24c.6.46.77.8.78 1.56v.14'
        stroke='currentColor'
      />
      <path
        d='M7.4 3.22a7.23 7.23 0 0 1 11.78 5.61 7.8 7.8 0 0 1-1.63 4.88'
        stroke='currentColor'
      />
      <path d='M15.33 17.06H8.65' stroke='currentColor' />
      <path
        d='M8.4 17.06v1.78c0 1.37 0 2.06.32 2.56a2 2 0 0 0 .58.58c.5.33 1.19.33 2.56.33s2.07 0 2.56-.33a2 2 0 0 0 .59-.58c.32-.5.32-1.19.32-2.56v-1.78'
        stroke='currentColor'
      />
      <path d='m2.74 2.74 18.52 18.52' stroke='currentColor' />
      <path d='M7.7 9.38c0-.58.03-.95.2-1.44' stroke='currentColor' />
      <path d='M9.27 5.83q.34-.27.7-.46' stroke='currentColor' />
      <path d='M15.33 17.15v-1.32c0-.12.06-.25.16-.3' stroke='currentColor' />
    </svg>
  )
}
