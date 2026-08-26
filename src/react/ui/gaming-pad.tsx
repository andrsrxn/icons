import type { Icon } from './types'

export const IconGamingPad: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-gaming-pad'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M14.4 5.64H9.58c-2.2 0-3.3 0-4.11.62-.8.61-1.1 1.67-1.68 3.8L2.7 14.07l-.17.7a3 3 0 0 0 1.14 2.85l.61.39c.38.22.56.33.73.41a3 3 0 0 0 3.37-.66c.13-.13.27-.32.54-.68.17-.23.26-.35.35-.44a3 3 0 0 1 1.97-.99l.54-.01h.4c.57 0 .85 0 1.11.05a3 3 0 0 1 1.17.48c.23.16.43.35.82.75l.74.74.26.25a3 3 0 0 0 3.67.26l.29-.21.23-.18a3 3 0 0 0 .94-3.26l-1.23-4.48c-.59-2.12-.88-3.17-1.68-3.79-.8-.61-1.9-.61-4.1-.61'
        fill='currentColor'
      />
      <path
        d='M14.4 5.64H9.58c-2.2 0-3.3 0-4.11.62-.8.61-1.1 1.67-1.68 3.8L2.7 14.07l-.17.7a3 3 0 0 0 1.14 2.85l.61.39c.38.22.56.33.73.41a3 3 0 0 0 3.37-.66c.13-.13.27-.32.54-.68h0c.17-.23.26-.35.35-.44a3 3 0 0 1 1.97-.99l.54-.01h.4c.57 0 .85 0 1.11.05a3 3 0 0 1 1.17.48c.23.16.43.35.82.75l.74.74.26.25a3 3 0 0 0 3.67.26l.29-.21h0l.23-.18a3 3 0 0 0 .94-3.26l-1.23-4.48c-.59-2.12-.88-3.17-1.68-3.79-.8-.61-1.9-.61-4.1-.61m-7.65 5.19h3.62m-1.81 1.81V9.02'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M15 12.2a.45.45 0 1 1-.9 0 .45.45 0 0 1 .9 0m1.9-2.73a.45.45 0 1 1-.9 0 .45.45 0 0 1 .9 0'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
