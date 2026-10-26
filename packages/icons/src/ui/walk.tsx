import type { Icon } from './types'

export const IconWalk: Icon = ({
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
      data-slot='icon-ui-walk'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle opacity='.2' cx='12.05' cy='4.47' r='2.9' fill='currentColor' />
      <circle cx='12.05' cy='4.47' r='2.9' stroke='currentColor' />
      <path
        d='M12.05 7.37v7.01c0 .36 0 .54.06.7.06.17.17.31.4.59l1.8 2.13c.13.16.2.24.25.34.05.09.08.19.13.39l1.16 3.94'
        stroke='currentColor'
      />
      <path
        d='m12 14.74-.6 3.14c-.05.23-.08.34-.12.45-.05.1-.12.2-.26.38l-2.85 3.76'
        stroke='currentColor'
      />
      <path d='m16.83 13-2.1-1.43-.26-.2-.21-.26-2.15-2.9' stroke='currentColor' />
      <path d='m12 8.43-2.04 1.82-.22.2-.17.27-1.76 2.95' stroke='currentColor' />
    </svg>
  )
}
