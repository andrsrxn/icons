import type { Icon } from './types'

export const IconBricksShield: Icon = ({
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
      data-slot='icon-ui-bricks-shield'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M2.68 10.68c0-3.77 0-5.66 1.17-6.83s3.06-1.17 6.83-1.17h2.64c3.77 0 5.66 0 6.83 1.17s1.17 3.06 1.17 6.83v4.75l-2.52-1.17-2.27 1.17-1.54 1.43 1.54 4.46h-5.85c-3.77 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83z'
        fill='currentColor'
      />
      <path
        d='M21.32 11.26v-.58c0-3.77 0-5.66-1.17-6.83s-3.06-1.17-6.83-1.17h-2.64c-3.77 0-5.66 0-6.83 1.17s-1.17 3.06-1.17 6.83v2.64c0 3.77 0 5.66 1.17 6.83s3.06 1.17 6.83 1.17h1.27'
        stroke='currentColor'
      />
      <path d='M2.68 8.5h18.64' stroke='currentColor' />
      <path d='M12 15.5v-7' stroke='currentColor' />
      <path d='M7.39 8.5V2.9' stroke='currentColor' />
      <path d='M7.39 21.14V15.5' stroke='currentColor' />
      <path d='M16.61 8.5V2.9' stroke='currentColor' />
      <path d='M2.68 15.5H12' stroke='currentColor' />
      <path d='M18.8 14.19c-.57.5-2.1 1.6-3.73 1.99' stroke='currentColor' />
      <path d='M18.8 14.19c.56.5 2.1 1.6 3.72 1.99' stroke='currentColor' />
      <path d='M22.52 16.18c0 2.34-.89 5-3.73 6.42' stroke='currentColor' />
      <path d='M15.07 16.18c0 2.34.88 5 3.72 6.42' stroke='currentColor' />
    </svg>
  )
}
