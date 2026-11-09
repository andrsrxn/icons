import type { Icon } from './types'

export const IconTestTubeOff: Icon = ({
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
      data-slot='icon-ui-test-tube-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M12 22.26a3.1 3.1 0 0 0 3.1-3.09v-4.45l-.9-.77a6 6 0 0 0-1.76-1.28c-.5-.19-1.06-.19-2.17-.19H8.91v6.69a3.1 3.1 0 0 0 3.09 3.1'
        fill='currentColor'
      />
      <path d='M15.1 14.99v4.18a3.1 3.1 0 0 1-6.2 0V8.97' stroke='currentColor' />
      <path d='M15.1 11.12V1.75m-6.2 0v3.47' stroke='currentColor' />
      <path d='M7.48 1.75h9.04' stroke='currentColor' />
      <path d='M8.9 12.48h3.59' stroke='currentColor' />
      <path d='m2.74 2.64 18.52 18.51' stroke='currentColor' />
    </svg>
  )
}
