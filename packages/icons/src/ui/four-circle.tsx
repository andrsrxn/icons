import type { Icon } from './types'

export const IconFourCircle: Icon = ({
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
      data-slot='icon-ui-four-circle'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <circle opacity='.2' cx='12' cy='12' r='10.22' fill='currentColor' />
      <circle cx='12' cy='12' r='10.22' stroke='currentColor' />
      <path
        d='M13.53 14.32v-5.2c0-1.39 0-2.08-.36-2.19s-.73.48-1.48 1.65h0l-2.7 4.2c-.43.68-.64 1.02-.5 1.28s.54.26 1.35.26zm0 0v2.96m0-2.96h1.55'
        stroke='currentColor'
      />
    </svg>
  )
}
