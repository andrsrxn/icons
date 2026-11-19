import type { Icon } from './types'

export const IconBorderTop: Icon = ({
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
      data-slot='icon-ui-border-top'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M15.24 2.76c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12v6.48c0 2.83 0 4.25-.88 5.12s-2.3.88-5.12.88H8.76c-2.83 0-4.24 0-5.12-.88-.88-.87-.88-2.29-.88-5.12V8.76c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88z'
        fill='currentColor'
      />
      <path
        d='M15.37 12H8.63M12 8.63v6.73M2.76 5.3a2.57 2.57 0 0 1 2.56-2.56h13.35a2.57 2.57 0 0 1 2.57 2.56M2.7 18.6v.05a2.6 2.6 0 0 0 2.62 2.61m15.98-2.53v.06a2.5 2.5 0 0 1-2.48 2.47m-7.98-.06h2.26m8.1-8.11v-2.25m-18.48.07v2.25'
        stroke='currentColor'
      />
    </svg>
  )
}
