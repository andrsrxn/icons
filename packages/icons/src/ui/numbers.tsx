import type { Icon } from './types'

export const IconNumbers: Icon = ({
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
      data-slot='icon-ui-numbers'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='m4.73 3.08 1.32-.84c.68-.43 1.02-.65 1.28-.5.26.14.26.54.26 1.34v7.38'
        stroke='currentColor'
      />
      <path
        d='M18.08 20.16v-4.04c0-1.4 0-2.1-.36-2.2s-.74.49-1.48 1.67h0l-1.93 3.04c-.43.67-.64 1.01-.5 1.27s.54.26 1.34.26zm0 0v2.28m0-2.28h1.21'
        stroke='currentColor'
      />
      <path
        d='M4.96 21.35c.97 1.58 4.47 1.69 4.47-1.3 0-1.5-1.16-1.93-2.4-1.96 1.1-.03 2.14-.56 2.14-1.97 0-2.8-3.3-2.7-4.2-1.22'
        stroke='currentColor'
      />
      <path
        d='M14.51 2.75c.95-1.54 4.37-1.65 4.37 1.27 0 2.1-2.77 3.1-4.3 5.75-.2.32.05.69.41.69h4'
        stroke='currentColor'
      />
    </svg>
  )
}
