import type { Icon } from './types'

export const IconBrowserGlobe: Icon = ({
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
      data-slot='icon-ui-browser-globe'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M1.97 5.69c0-1.08 0-1.61.2-2.03a2 2 0 0 1 .92-.92c.42-.2.95-.2 2.03-.2h13.74c1.07 0 1.6 0 2.02.2q.62.31.93.92c.2.42.2.95.2 2.03 0 .53 0 .8-.1 1a1 1 0 0 1-.47.47c-.2.1-.47.1-1 .1H3.53c-.54 0-.8 0-1.01-.1a1 1 0 0 1-.46-.46c-.1-.21-.1-.48-.1-1.01'
        fill='currentColor'
      />
      <path
        d='M22 9.31v-.77c0-2.83 0-4.25-.87-5.12-.88-.88-2.3-.88-5.12-.88H7.97c-2.83 0-4.25 0-5.13.88-.87.87-.87 2.29-.87 5.12v3.91c0 2.54 0 3.81.71 4.65l.34.33c.84.72 2.1.72 4.65.72'
        stroke='currentColor'
      />
      <path d='M22 7.26H1.98' stroke='currentColor' />
      <circle
        opacity='.2'
        cx='16.55'
        cy='16.53'
        r='5.73'
        transform='rotate(90 16.55 16.53)'
        fill='currentColor'
      />
      <circle
        cx='16.55'
        cy='16.53'
        r='5.73'
        transform='rotate(90 16.55 16.53)'
        stroke='currentColor'
      />
      <ellipse
        cx='16.55'
        cy='16.53'
        rx='5.73'
        ry='1.9'
        transform='rotate(90 16.55 16.53)'
        stroke='currentColor'
      />
      <path d='M10.82 16.53h11.45' stroke='currentColor' />
    </svg>
  )
}
