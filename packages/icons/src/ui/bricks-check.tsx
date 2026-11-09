import type { Icon } from './types'

export const IconBricksCheck: Icon = ({
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
      data-slot='icon-ui-bricks-check'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M2.68 10.68c0-3.77 0-5.66 1.17-6.83s3.06-1.17 6.83-1.17h2.64c3.77 0 5.66 0 6.83 1.17s1.17 3.06 1.17 6.83v5.08c0 .57 0 .86-.04 1.14a4 4 0 0 1-.6 1.61c-.15.24-.34.46-.72.9-.46.52-.69.78-.94 1a4 4 0 0 1-1.88.85c-.33.06-.68.06-1.38.06h-5.08c-3.77 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83z'
        fill='currentColor'
      />
      <path
        d='M21.32 12.94v-2.26c0-3.77 0-5.66-1.17-6.83s-3.06-1.17-6.83-1.17h-2.64c-3.77 0-5.66 0-6.83 1.17s-1.17 3.06-1.17 6.83v2.64c0 3.77 0 5.66 1.17 6.83s3.06 1.17 6.83 1.17h1.45'
        stroke='currentColor'
      />
      <path d='M2.68 8.5h18.64' stroke='currentColor' />
      <path d='M12 15.5v-7' stroke='currentColor' />
      <path d='M7.39 8.5V3.06' stroke='currentColor' />
      <path d='M7.39 21.08V15.5' stroke='currentColor' />
      <path d='M16.61 8.5V3.06' stroke='currentColor' />
      <path d='M2.68 15.5h13.93' stroke='currentColor' />
      <path
        d='m15.5 19.7.65.81c.72.91 1.08 1.37 1.57 1.37.48 0 .84-.46 1.56-1.37l3.12-3.95'
        stroke='currentColor'
      />
    </svg>
  )
}
