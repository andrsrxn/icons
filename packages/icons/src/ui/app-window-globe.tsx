import type { Icon } from './types'

export const IconAppWindowGlobe: Icon = ({
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
      data-slot='icon-ui-app-window-globe'
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
        d='M21.79 9.03c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88H7.7c-2.82 0-4.24 0-5.12.88S1.7 6.2 1.7 9.03v2.68c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88h3.21l.33-3.3 2.3-2.91 3.85-.62 4.4 2.5z'
        fill='currentColor'
      />
      <path
        d='M7.41 17.7c-2.54 0-3.82 0-4.66-.71l-.32-.33c-.73-.84-.73-2.11-.73-4.66V9.03c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88h9c1.95 0 2.93 0 3.65.44a3 3 0 0 1 1 1c.44.72.44 1.7.44 3.65'
        stroke='currentColor'
      />
      <path
        d='M6.45 6.97a.53.53 0 1 1-1.06 0 .53.53 0 0 1 1.06 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M10.46 6.97a.53.53 0 1 1-1.06 0 .53.53 0 0 1 1.06 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M14.46 6.97a.53.53 0 1 1-1.05 0 .53.53 0 0 1 1.05 0'
        fill='currentColor'
        stroke='currentColor'
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
        ry='2.03'
        transform='rotate(90 16.55 16.53)'
        stroke='currentColor'
      />
      <path d='M10.82 16.53h11.45' stroke='currentColor' />
    </svg>
  )
}
