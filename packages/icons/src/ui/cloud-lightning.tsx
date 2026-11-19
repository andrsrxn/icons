import type { Icon } from './types'

export const IconCloudLightning: Icon = ({
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
      data-slot='icon-ui-cloud-lightning'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='m1.69 14.09 3.77 2.64h3.65l3.65-4.42.35 3.43h1.68l.28 1h4.02l2.96-2.15v-4.28l-3.3-2.35-1.85.44-.8-2.72-3.96-2.28-3.3 1.42-1.96 2.62L2.6 9.17z'
        fill='currentColor'
      />
      <path d='M6.97 7.55a5.09 5.09 0 0 1 9.33-1.18c.84 1.44.8 2.9.61 3.88' stroke='currentColor' />
      <path
        d='M5.16 16.38a3.6 3.6 0 0 1-2.15-1.16 4.27 4.27 0 0 1 3.06-7.27c1.4 0 2.64.67 3.42 1.71'
        stroke='currentColor'
      />
      <path
        d='M17.05 8.41a3.6 3.6 0 0 1 3.38.12 4.3 4.3 0 0 1 1.56 5.84c-.7 1.21-1.65 1.95-2.63 2.08'
        stroke='currentColor'
      />
      <path
        d='m11.26 13.82-1.69 2.04c-.48.58-.72.87-.66 1.11l.09.18c.15.2.52.2 1.28.2.43 0 .65 0 .8.12l.1.11c.09.16.06.37 0 .8v.06h0c-.2 1.34-.29 2 .01 2.17l.1.04c.33.1.74-.42 1.58-1.48l1.65-2.07c.43-.54.64-.8.6-1.04l-.11-.22c-.15-.18-.5-.18-1.19-.18-.4 0-.61 0-.75-.1l-.12-.15c-.09-.15-.06-.35 0-.76v-.08c.19-1.31.28-1.97-.02-2.13l-.08-.04c-.33-.11-.75.4-1.6 1.42'
        stroke='currentColor'
      />
    </svg>
  )
}
