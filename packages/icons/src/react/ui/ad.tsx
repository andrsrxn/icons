import type { Icon } from './types'

export const IconAd: Icon = ({
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
      data-slot='icon-ui-ad'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M21.62 5.46H2.38v13.08h19.24z'
        fill='currentColor'
      />
      <rect x='1.71' y='5.01' width='20.58' height='13.98' rx='3' stroke='currentColor' />
      <path
        d='m5.1 15.33 1.1-3.16c.8-2.27 1.2-3.4 1.9-3.4.71 0 1.1 1.14 1.89 3.4l1.08 3.16'
        stroke='currentColor'
      />
      <path d='M9.82 13.17H6.36' stroke='currentColor' />
      <path
        d='M13.96 10.7v2.97c0 .84 0 1.26.34 1.56.33.3.68.25 1.38.17 1.43-.17 3.22-.85 3.22-3.22s-1.8-3.05-3.22-3.22c-.7-.08-1.05-.12-1.38.18-.34.3-.34.71-.34 1.55'
        stroke='currentColor'
      />
    </svg>
  )
}
