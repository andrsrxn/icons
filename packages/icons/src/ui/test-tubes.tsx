import type { Icon } from './types'

export const IconTestTubes: Icon = ({
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
      data-slot='icon-ui-test-tubes'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M6.52 21.37a2.83 2.83 0 0 0 2.82-2.82v-6.11H3.7v6.1a2.83 2.83 0 0 0 2.83 2.83'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M17.48 21.37a2.83 2.83 0 0 0 2.83-2.82v-6.11h-5.65v6.1a2.83 2.83 0 0 0 2.82 2.83'
        fill='currentColor'
      />
      <path
        d='M6.52 21.37a2.83 2.83 0 0 0 2.82-2.82V2.63H3.7v15.92a2.83 2.83 0 0 0 2.83 2.82'
        stroke='currentColor'
      />
      <path
        d='M17.48 21.37a2.83 2.83 0 0 0 2.83-2.82V2.63h-5.65v15.92a2.83 2.83 0 0 0 2.82 2.82'
        stroke='currentColor'
      />
      <path d='M2.38 2.63h8.27' stroke='currentColor' />
      <path d='M13.35 2.63h8.27' stroke='currentColor' />
      <path d='M3.7 12.44h5.64' stroke='currentColor' />
      <path d='M14.66 12.44h5.65' stroke='currentColor' />
    </svg>
  )
}
