import type { Icon } from './types'

export const IconWashOff: Icon = ({
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
      data-slot='icon-ui-wash-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='m21.62 8.53-3.87.78c-.49.1-.73.15-.98.14a4 4 0 0 1-.96-.23L9.02 7.18a4 4 0 0 0-1.2-.26c-.3 0-.59.1-1.18.28L2.53 8.53l1.75 7.08c.36 1.46.54 2.19 1.08 2.61.54.43 1.3.43 2.8.43h7.7c1.47 0 2.2 0 2.75-.42.54-.4.73-1.12 1.1-2.55z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='m1.7 5.35 1.64 7.1c.7 2.97 1.04 4.46 2.13 5.33 1.1.87 2.62.87 5.67.87h1.7c2.64 0 4.14 0 5.2-.56'
        stroke='currentColor'
      />
      <path d='m22.3 5.35-1.66 7.12h0q-.37 1.64-.69 2.73' stroke='currentColor' />
      <path
        d='M21.62 7.6c-.53.73-1.78 2.04-4.5 2.04-1.58 0-3.37-.83-5.14-1.52'
        stroke='currentColor'
      />
      <path d='M2.72 9.1a8.4 8.4 0 0 1 4.66-1.85' stroke='currentColor' />
      <path d='m2.74 2.46 18.52 18.5' stroke='currentColor' />
    </svg>
  )
}
