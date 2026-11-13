import type { Icon } from './types'

export const IconAgeRatingEighteenPlus: Icon = ({
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
      data-slot='icon-ui-age-rating-eighteen-plus'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <circle opacity='.2' cx='12' cy='12' r='10.22' fill='currentColor' />
      <circle cx='12' cy='12' r='10.22' stroke='currentColor' />
      <path d='M17.63 10.06v3.9' stroke='currentColor' />
      <path d='M15.68 12h3.9' stroke='currentColor' />
      <path
        d='M11.32 12.24c.82.53 1.66 1.03 1.66 1.88s-.85 1.45-1.7 1.4c-.8-.05-1.5-.6-1.5-1.38 0-1.25 1.5-1.88 1.5-1.88zm0 0c-.82-.52-1.63-1.07-1.63-2 0-.83.75-1.4 1.59-1.4s1.68.57 1.68 1.4c0 1.22-1.39 1.89-1.64 2'
        stroke='currentColor'
      />
      <path
        d='m4.65 9.87.66-.42c.68-.43 1.02-.64 1.28-.5s.26.54.26 1.35v5.22'
        stroke='currentColor'
      />
    </svg>
  )
}
