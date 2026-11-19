import type { Icon } from './types'

export const IconOneToOne: Icon = ({
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
      data-slot='icon-ui-one-to-one'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <circle opacity='.2' cx='4.39' cy='12' r='2.67' fill='currentColor' />
      <circle opacity='.2' cx='19.68' cy='12' r='2.67' fill='currentColor' />
      <circle cx='4.39' cy='12' r='2.67' stroke='currentColor' />
      <circle cx='19.68' cy='12' r='2.67' stroke='currentColor' />
      <path d='M7.06 12h6.4' stroke='currentColor' />
      <path
        d='m11.95 9.17.7.7c1 1 1.5 1.5 1.51 2.13 0 .62-.5 1.12-1.5 2.12l-.71.71'
        stroke='currentColor'
      />
    </svg>
  )
}
