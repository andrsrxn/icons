import type { Icon } from './types'

export const IconSolarPanel: Icon = ({
  size = 24,
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
      data-slot='solar-panel'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M3.97 11.2h16.36l.25 3.87H3.42zm1.21-6.53h13.89l.2 3.28H4.73z'
        fill='currentColor'
      />
      <path
        d='M4.6 7.37c.33-1.5.5-2.24 1.05-2.67.55-.44 1.31-.44 2.84-.44h7.14c1.55 0 2.32 0 2.87.45.55.44.72 1.2 1.04 2.72l.69 3.21c.47 2.24.71 3.36.11 4.1s-1.74.74-4.02.74H7.76c-2.32 0-3.47 0-4.07-.75-.6-.76-.35-1.88.17-4.14z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M10.32 4.76a.77.77 0 0 0-.68-.83.73.73 0 0 0-.8.66l.74.08zM7.9 15.16c-.04.42.27.79.68.83.4.05.77-.25.8-.66l-.74-.08zM9.58 4.68l-.75-.08-.93 10.58.74.08.75.08.93-10.57zm4.1.08a.77.77 0 0 1 .68-.83c.41-.05.77.25.8.66l-.74.08zm2.42 10.4a.77.77 0 0 1-.68.83.73.73 0 0 1-.8-.66l.74-.08zM14.42 4.68l.75-.08.93 10.58-.74.08-.75.08-.93-10.57z'
        fill='currentColor'
      />
      <path
        d='M19.56 8.03H4.73m15.58 3.68H3.7m8.3 3.77v4.78m2.4 0H9.6'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
