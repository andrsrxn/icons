import type { Icon } from './types'

export const IconSnowflake: Icon = ({
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
      data-slot='icon-ui-snowflake'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle opacity='.2' cx='12' cy='11.95' r='3.67' fill='currentColor' />
      <path
        d='m9.68 2.2-.42 1.55c-.24.91-.36 1.37-.72 1.58s-.81.08-1.73-.16l-1.54-.42'
        stroke='currentColor'
      />
      <path
        d='m9.68 21.75-.42-1.55c-.24-.91-.36-1.37-.72-1.57-.36-.21-.81-.09-1.73.16l-1.54.41'
        stroke='currentColor'
      />
      <path
        d='m14.2 2.2.41 1.55c.25.91.37 1.37.73 1.58.35.2.81.08 1.72-.16l1.55-.42'
        stroke='currentColor'
      />
      <path
        d='m14.2 21.75.41-1.55c.25-.91.37-1.37.73-1.57.35-.21.81-.09 1.72.16l1.55.41'
        stroke='currentColor'
      />
      <path d='M8.23 12.07H1.7' stroke='currentColor' />
      <path d='M15.77 12.07h6.53' stroke='currentColor' />
      <path d='m6.96 2.45 3.4 5.88' stroke='currentColor' />
      <path d='m6.96 21.5 3.4-5.88' stroke='currentColor' />
      <path d='m17.04 2.45-3.4 5.88' stroke='currentColor' />
      <path d='m17.04 21.5-3.4-5.88' stroke='currentColor' />
      <path
        d='m2.82 9.63 1.03 1.03c.67.66 1 1 1 1.41 0 .42-.33.75-1 1.42l-1.03 1.03'
        stroke='currentColor'
      />
      <path
        d='m21.18 9.63-1.03 1.03c-.67.66-1 1-1 1.41 0 .42.33.75 1 1.42l1.03 1.03'
        stroke='currentColor'
      />
      <circle cx='12' cy='11.95' r='3.67' stroke='currentColor' />
    </svg>
  )
}
