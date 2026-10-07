import type { Icon } from './types'

export const IconGolf: Icon = ({
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
      data-slot='icon-ui-golf'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='m16.73 7.78-5.32 13.85' stroke='currentColor' />
      <path
        d='M8 17.05c2 1.3 3.12 2.2 3.35 3.53.13.75.2 1.12-.2 1.5-.41.36-.9.23-1.9-.04l-2.3-.62-2.32-.62c-.95-.25-1.43-.38-1.62-.82-.2-.45 0-.82.4-1.56.93-1.71 2.45-2.75 4.6-1.37'
        stroke='currentColor'
      />
      <circle opacity='.2' cx='18.69' cy='19.87' r='2.16' fill='currentColor' />
      <path
        opacity='.2'
        d='M11.29 21.38c-.04.55-.6.87-1.14.72-.75-.2-1.9-.5-3.16-.85l-3.17-.85c-.54-.14-.86-.7-.62-1.2.96-2 3.04-3.13 5.03-2.6 2 .54 3.23 2.56 3.06 4.78'
        fill='currentColor'
      />
      <circle cx='18.69' cy='19.87' r='2.16' stroke='currentColor' />
      <path
        opacity='.2'
        d='M19.24 1.97c.8.33 1.3.95.25 3.5-1.11 2.68-1.9 2.74-2.7 2.41s-1.17-1.28-.2-3.6c1.06-2.58 1.84-2.64 2.65-2.31'
        fill='currentColor'
      />
      <rect
        x='15.32'
        y='7.16'
        width='6.3'
        height='3.27'
        rx='1'
        transform='rotate(-67.56 15.32 7.16)'
        stroke='currentColor'
      />
    </svg>
  )
}
