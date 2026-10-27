import type { Icon } from './types'

export const IconLogicNot: Icon = ({
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
      data-slot='icon-ui-logic-not'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M13.43 13.46c.73-.69 1.1-1.03 1.1-1.46s-.37-.77-1.1-1.46l-4.26-4C7.73 5.18 7.01 4.5 6.4 4.77S5.8 6.02 5.8 8v8c0 1.98 0 2.97.6 3.23s1.33-.41 2.77-1.77z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='m9.2 17.26 3.9-3.84c.67-.67 1.01-1 1.01-1.42s-.34-.75-1.02-1.42L9.21 6.74C7.76 5.3 7.03 4.59 6.4 4.84c-.6.26-.6 1.28-.6 3.32v7.68c0 2.04 0 3.06.6 3.31.62.26 1.35-.46 2.8-1.89'
        stroke='currentColor'
      />
      <path d='M1.67 8.46H5.8' stroke='currentColor' />
      <path d='M1.67 15.54H5.8' stroke='currentColor' />
      <path d='M18.9 12h3.43' stroke='currentColor' />
      <circle opacity='.2' cx='16.55' cy='12' r='2.35' fill='currentColor' />
      <circle cx='16.55' cy='12' r='2.35' stroke='currentColor' />
    </svg>
  )
}
