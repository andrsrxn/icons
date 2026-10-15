import type { Icon } from './types'

export const IconPasscodeCheck: Icon = ({
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
      data-slot='icon-ui-passcode-check'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m17.71 19.65 4.6-5.14V9.8c0-1.89 0-2.83-.59-3.42s-1.53-.58-3.41-.58H5.69c-1.88 0-2.82 0-3.41.58-.59.59-.59 1.53-.59 3.42v4.42c0 1.89 0 2.83.59 3.42s1.53.58 3.41.58h10.15z'
        fill='currentColor'
      />
      <path
        d='M11.7 18.21h-4c-2.83 0-4.25 0-5.13-.88s-.88-2.29-.88-5.12v-.42c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88h10c1.5 0 2.26 0 2.85.26a3 3 0 0 1 1.5 1.5c.27.6.27 1.35.27 2.86'
        stroke='currentColor'
      />
      <path
        d='M6.96 12a.66.66 0 1 1-1.32 0 .66.66 0 0 1 1.32 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M12.62 12a.66.66 0 1 1-1.32 0 .66.66 0 0 1 1.32 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='m15.82 17.56.62.79c.73.9 1.1 1.36 1.57 1.36.49 0 .85-.46 1.57-1.37l3.07-3.89'
        stroke='currentColor'
      />
      <path
        d='M18.48 12a.66.66 0 1 1-1.32 0 .66.66 0 0 1 1.32 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
