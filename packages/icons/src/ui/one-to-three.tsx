import type { Icon } from './types'

export const IconOneToThree: Icon = ({
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
      data-slot='icon-ui-one-to-three'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <circle opacity='.2' cx='4.03' cy='12' r='2.25' fill='currentColor' />
      <circle opacity='.2' cx='20.15' cy='12' r='2.25' fill='currentColor' />
      <circle opacity='.2' cx='20.15' cy='3.96' r='2.25' fill='currentColor' />
      <circle opacity='.2' cx='20.15' cy='20.04' r='2.25' fill='currentColor' />
      <circle cx='4.03' cy='12' r='2.25' stroke='currentColor' />
      <circle cx='20.15' cy='12' r='2.25' stroke='currentColor' />
      <circle cx='20.15' cy='3.96' r='2.25' stroke='currentColor' />
      <circle cx='20.15' cy='20.04' r='2.25' stroke='currentColor' />
      <path d='M6.28 12h8.31' stroke='currentColor' />
      <path
        d='M9.98 11.9V8.6c0-1.98 0-2.98.53-3.66q.19-.24.42-.42C11.61 4 12.61 4 14.6 4'
        stroke='currentColor'
      />
      <path
        d='M9.98 12.14v3.29c0 1.98 0 2.97.53 3.65q.19.24.42.43c.68.53 1.68.53 3.66.53'
        stroke='currentColor'
      />
      <path
        d='m13.68 9.83.05.05c1 1 1.5 1.5 1.5 2.12s-.5 1.12-1.5 2.12l-.05.05'
        stroke='currentColor'
      />
      <path
        d='m13.68 17.87.05.05c1 1 1.5 1.5 1.5 2.12s-.5 1.12-1.5 2.12l-.05.05'
        stroke='currentColor'
      />
      <path
        d='m13.68 1.8.05.04c1 1 1.5 1.5 1.5 2.12s-.5 1.12-1.5 2.12l-.05.05'
        stroke='currentColor'
      />
    </svg>
  )
}
