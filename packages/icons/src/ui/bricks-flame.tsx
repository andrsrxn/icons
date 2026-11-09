import type { Icon } from './types'

export const IconBricksFlame: Icon = ({
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
      data-slot='icon-ui-bricks-flame'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M2.68 10.68c0-3.77 0-5.66 1.17-6.83s3.06-1.17 6.83-1.17h2.64c3.77 0 5.66 0 6.83 1.17s1.17 3.06 1.17 6.83v4.75l-2.23-3.28-1.26 1.78-.5 2.59h-2.16l-.3 2.85.9 1.95h-5.09c-3.77 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83z'
        fill='currentColor'
      />
      <path
        d='M11.95 21.32h-1.27c-3.77 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83v-2.64c0-3.77 0-5.66 1.17-6.83s3.06-1.17 6.83-1.17h4.88c1.64 0 2.46 0 3.12.24a4 4 0 0 1 2.4 2.4c.24.66.24 1.48.24 3.12'
        stroke='currentColor'
      />
      <path d='M2.68 8.5h18.64' stroke='currentColor' />
      <path d='M12 15.5v-7' stroke='currentColor' />
      <path d='M7.39 8.5V3.02' stroke='currentColor' />
      <path d='M7.39 21.07V15.5' stroke='currentColor' />
      <path d='M16.61 8.5V3.02' stroke='currentColor' />
      <path d='M2.68 15.5H12' stroke='currentColor' />
      <path
        d='M19.81 12.75c.15.8.5 1.85 1.29 2.79 1.26 1.48 1.55 2.74 1.34 3.96-.43 2.54-2.47 2.96-3.76 2.96-1.61 0-3.5-1.11-3.78-3.82-.1-.96.04-1.74.23-2.29.07-.19.1-.28.4-.32s.4.08.57.32q.12.18.29.34c.26.23.39.35.68.22s.3-.4.32-.97a7 7 0 0 1 .52-2.5q.35-.72.76-1.2c.26-.3.39-.44.7-.36s.35.34.44.87'
        stroke='currentColor'
      />
    </svg>
  )
}
