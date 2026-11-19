import type { Icon } from './types'

export const IconOneToTwo: Icon = ({
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
      data-slot='icon-ui-one-to-two'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <circle opacity='.2' cx='4.03' cy='12' r='2.25' fill='currentColor' />
      <circle opacity='.2' cx='20.15' cy='6.57' r='2.25' fill='currentColor' />
      <circle opacity='.2' cx='20.15' cy='17.46' r='2.25' fill='currentColor' />
      <circle cx='4.03' cy='12' r='2.25' stroke='currentColor' />
      <circle cx='20.15' cy='6.57' r='2.25' stroke='currentColor' />
      <circle cx='20.15' cy='17.46' r='2.25' stroke='currentColor' />
      <path d='M6.28 12h3.76' stroke='currentColor' />
      <path
        d='M10.04 11.94v-.81c0-1.93 0-2.9.5-3.56q.2-.28.5-.5c.66-.5 1.62-.5 3.55-.5'
        stroke='currentColor'
      />
      <path
        d='M10.04 12.1v.8c0 1.94 0 2.9.5 3.57q.2.28.5.5c.66.5 1.62.5 3.55.5'
        stroke='currentColor'
      />
      <path
        d='m13.68 15.21.13.13c1 1 1.5 1.5 1.5 2.12s-.5 1.13-1.5 2.13l-.13.13'
        stroke='currentColor'
      />
      <path
        d='m13.68 4.32.13.13c1 1 1.5 1.5 1.5 2.12s-.5 1.12-1.5 2.12l-.13.13'
        stroke='currentColor'
      />
    </svg>
  )
}
