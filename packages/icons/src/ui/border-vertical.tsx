import type { Icon } from './types'

export const IconBorderVertical: Icon = ({
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
      data-slot='icon-ui-border-vertical'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M8.73 21.24c-2.83 0-4.25 0-5.13-.88s-.87-2.3-.87-5.12V8.76c0-2.83 0-4.24.87-5.12.88-.88 2.3-.88 5.13-.88h6.48c2.82 0 4.24 0 5.12.88s.88 2.3.88 5.12v6.48c0 2.83 0 4.24-.88 5.12s-2.3.88-5.12.88z'
        fill='currentColor'
      />
      <path
        d='M8.6 12h6.73m-3.36 3.37V8.63m9.23 10.05a2.57 2.57 0 0 1-2.56 2.56H5.3a2.57 2.57 0 0 1-2.56-2.56m.03-7.96v2.58m18.48-2.58v2.58M2.8 5.34a2.57 2.57 0 0 1 2.56-2.57H18.7a2.57 2.57 0 0 1 2.56 2.57'
        stroke='currentColor'
      />
    </svg>
  )
}
