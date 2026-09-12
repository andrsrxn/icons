import type { Icon } from './types'

export const IconLandscapeToPortrait: Icon = ({
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
      data-slot='icon-ui-landscape-to-portrait'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='2.78'
        y='12.34'
        width='18.44'
        height='8.92'
        rx='2'
        fill='currentColor'
      />
      <rect x='2.78' y='12.34' width='18.44' height='8.92' rx='3' stroke='currentColor' />
      <path
        d='M11.67 11.57V7.15c0-1.35 0-2.02-.21-2.56a3 3 0 0 0-1.68-1.68c-.54-.2-1.21-.2-2.56-.2-1.34 0-2.02 0-2.55.2A3 3 0 0 0 3 4.6c-.21.54-.21 1.21-.21 2.56v9.1'
        stroke='currentColor'
      />
      <path
        d='M14.8 5.77h1.1c1.81 0 2.72 0 3.3.55l.08.08c.55.58.55 1.49.55 3.3'
        stroke='currentColor'
      />
      <path
        d='m16.37 3.4-.26.25c-1 1-1.5 1.5-1.5 2.12s.5 1.12 1.5 2.12l.26.26'
        stroke='currentColor'
      />
    </svg>
  )
}
