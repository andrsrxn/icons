import type { Icon } from './types'

export const IconAlignBoxCenterCenter: Icon = ({
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
      data-slot='icon-ui-align-box-center-center'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M13.24 21.24c3.77 0 5.66 0 6.83-1.17 1.17-1.18 1.17-3.06 1.17-6.83v-2.48c0-3.77 0-5.65-1.17-6.83S17 2.76 13.24 2.76h-2.48c-3.77 0-5.66 0-6.83 1.17C2.76 5.11 2.76 7 2.76 10.76v2.48c0 3.77 0 5.65 1.17 6.83s3.06 1.17 6.83 1.17z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M21.38 13.38v-2.76c0-3.78 0-5.66-1.17-6.83s-3.06-1.17-6.83-1.17h-2.77c-3.77 0-5.66 0-6.83 1.17s-1.17 3.05-1.17 6.83v2.76c0 3.78 0 5.66 1.17 6.83s3.06 1.17 6.83 1.17h2.77c3.77 0 5.66 0 6.83-1.17s1.17-3.05 1.17-6.83'
        stroke='currentColor'
      />
      <path d='M9.4 13.82h5.2' stroke='currentColor' />
      <path d='M7.7 10.18h8.6' stroke='currentColor' />
    </svg>
  )
}
