import type { Icon } from './types'

export const IconMilestone: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-milestone'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M1.9 8.94c0-1.65 0-2.47.45-3.03l.27-.27C3.17 5.2 4 5.2 5.65 5.2h11.04c.59 0 .89 0 1.17.08s.52.25 1.02.57l.9.6c1.73 1.12 2.59 1.7 2.59 2.5 0 .81-.86 1.38-2.59 2.5l-.9.6c-.5.33-.74.49-1.02.57-.28.09-.58.09-1.17.09H5.65c-1.65 0-2.48 0-3.03-.46l-.27-.27c-.46-.56-.46-1.38-.46-3.03'
        fill='currentColor'
      />
      <path
        d='M1.9 8.94c0-1.65 0-2.47.45-3.03l.27-.27C3.17 5.2 4 5.2 5.65 5.2h11.4c.7 0 1.04 0 1.36.11s.6.33 1.14.77l.67.53c1.34 1.08 2.01 1.62 2.01 2.34s-.67 1.26-2.01 2.34l-.67.53c-.54.44-.81.66-1.14.77-.32.12-.67.12-1.36.12H5.65c-1.65 0-2.48 0-3.03-.46l-.27-.27c-.46-.56-.46-1.38-.46-3.03'
        stroke='currentColor'
      />
      <path d='M11.78 5.19V1.74' stroke='currentColor' />
      <path d='M11.78 22.25V12.7' stroke='currentColor' />
    </svg>
  )
}
