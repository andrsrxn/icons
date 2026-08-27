import type { Icon } from './types'

export const IconCamping: Icon = ({
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
      data-slot='ui-icon-camping'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M8.23 13.37c-.58-1.27-.87-1.9-.58-2.37.3-.46 1-.46 2.4-.46h6.91c.72 0 1.08 0 1.35.2s.37.55.57 1.24l1.73 5.88c.33 1.12.5 1.68.21 2.08-.28.4-.86.42-2.03.48l-5.82.3c-.66.03-.99.04-1.25-.12-.26-.15-.4-.45-.67-1.05z'
        fill='currentColor'
      />
      <circle opacity='.2' cx='6.78' cy='5.08' r='2.24' fill='currentColor' />
      <path
        d='M5.66 12.55c.56-.98.84-1.47 1.3-1.74s1.04-.27 2.16-.27h6.69c1.34 0 2 0 2.52.36.52.35.75.98 1.22 2.23l.82 2.16c.92 2.46 1.38 3.69.79 4.55-.6.86-1.91.86-4.54.86H7.88c-3.07 0-4.6 0-5.19-1-.57-1 .2-2.33 1.73-5zm1.12 4.93v3.22m10.05-10.16V2.37m0 3 2.7-1.39m-2.7 3.08-2.7-1.39'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <circle cx='6.78' cy='5.08' r='2.24' stroke='currentColor' strokeWidth={strokeWidth} />
      <path d='m7.2 11.05 4.3 9.65' stroke='currentColor' strokeWidth={strokeWidth} />
    </svg>
  )
}
