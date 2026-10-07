import type { Icon } from './types'

export const IconTractor: Icon = ({
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
      data-slot='icon-ui-tractor'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M20 11.72a2 2 0 0 0-.3-.5 1 1 0 0 0-.38-.25c-.13-.05-.28-.06-.57-.09l-6.21-.53q-.29-.03-.37-.02a1 1 0 0 0-.8 1.54l.23.29.13.15c.55.67.78 1.56.6 2.41l-.16.83a2.2 2.2 0 0 0 3.78 1.9l1.65-1.8 2.18.99a1.37 1.37 0 0 0 1.78-1.87z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M5.8 3.85c-1-.13-1.5-.2-1.84.09-.34.28-.36.79-.41 1.8l-.1 2.08c-.05 1.08-.07 1.62.26 1.93.34.32.87.26 1.95.15l.24-.03c.85-.08 1.28-.13 1.53-.41.26-.29.26-.72.26-1.57V5.85c0-.83 0-1.25-.25-1.53s-.66-.34-1.5-.45z'
        fill='currentColor'
      />
      <path
        d='m15.08 10.56-1.1-3.04c-.7-1.9-1.04-2.86-1.82-3.4-.77-.55-1.8-.55-3.82-.55h-.52c-1.88 0-2.83 0-3.41.59-.59.58-.59 1.53-.59 3.41V11'
        stroke='currentColor'
      />
      <path
        d='M20.44 17.27a1.85 1.85 0 0 0 1.38-2.63l-.9-1.88a5 5 0 0 0-.77-1.28 2 2 0 0 0-.52-.36 4 4 0 0 0-1.47-.26L7.58 9.93'
        stroke='currentColor'
      />
      <ellipse
        cx='7.29'
        cy='15.17'
        rx='5.25'
        ry='5.41'
        transform='rotate(90 7.29 15.17)'
        stroke='currentColor'
      />
      <ellipse
        cx='18.11'
        cy='17.97'
        rx='2.26'
        ry='2.33'
        transform='rotate(90 18.11 17.97)'
        stroke='currentColor'
      />
      <path d='M11.97 17.97h3.81' stroke='currentColor' />
      <path d='M7.83 9.8V3.81' stroke='currentColor' />
      <path d='M18.15 10.73V6.64c0-.94 0-1.41.29-1.7.3-.3.76-.3 1.7-.3' stroke='currentColor' />
      <path
        d='M8.17 15.17c0 .47-.4.85-.88.85a.86.86 0 0 1-.87-.85c0-.47.39-.85.87-.85s.88.38.88.85'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
