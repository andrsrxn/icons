import type { Icon } from './types'

export const IconToothpaste: Icon = ({
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
      data-slot='icon-ui-toothpaste'
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
        d='M14 5.12c.28-.22.42-.33.55-.4a3 3 0 0 1 3.5.2c.13.09.25.22.5.47l.47.48a3 3 0 0 1 .22 3.48c-.08.13-.19.27-.4.55L9.9 21.46c-.65.83-.97 1.25-1.42 1.28s-.83-.34-1.57-1.1l-4.5-4.48c-.73-.74-1.1-1.11-1.08-1.56s.44-.77 1.26-1.42zm-1.15 8.99c-1.23 1.22-2.78 1.13-3.52.4-.74-.75-.4-1.99.82-3.22 1.23-1.22 2.67-1.62 3.41-.88.74.73.52 2.47-.7 3.7'
        fill='currentColor'
      />
      <path
        d='M18.6 11.31c.64-.77.97-1.15 1.14-1.55a3 3 0 0 0-.11-2.63c-.2-.39-.56-.74-1.27-1.45A7 7 0 0 0 16.9 4.4a3 3 0 0 0-2.64-.1c-.4.17-.78.5-1.55 1.15l-8.58 7.31c-1.54 1.32-2.32 1.98-2.35 2.85s.68 1.6 2.12 3.03l1.54 1.54c1.43 1.44 2.15 2.16 3.03 2.12s1.54-.82 2.85-2.37z'
        stroke='currentColor'
      />
      <ellipse
        cx='11.65'
        cy='12.44'
        rx='1.89'
        ry='3.62'
        transform='rotate(45 11.65 12.44)'
        stroke='currentColor'
      />
      <path
        d='m16.83 4.22 1.83-1.56c.62-.54.94-.8 1.3-.8h.09c.36.03.66.32 1.24.9.57.57.85.86.89 1.22v.08c0 .37-.25.68-.76 1.3l-1.55 1.9'
        stroke='currentColor'
      />
    </svg>
  )
}
