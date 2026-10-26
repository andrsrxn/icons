import type { Icon } from './types'

export const IconMustache: Icon = ({
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
      data-slot='icon-ui-mustache'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m4.71 9.27-1.5.95c-.77.48-1.16.72-1.26 1.1-.1.4.13.8.58 1.58l.81 1.43c.2.33.29.5.44.62s.33.18.7.29c1.09.33 3.1.93 4.2 1.16.25.05.37.07.58.03s.33-.13.58-.31l2.3-1.63 2.52 2 4.58-.82.42-.08-.07.02c.92-.25 1.93-2.35 1.93-2.35l.21-.54c.3-.77.46-1.15.34-1.5-.13-.36-.49-.56-1.2-.97l-1.06-.6L16 7.23l-3.87 1.65-3.92-1.59z'
        fill='currentColor'
      />
      <path
        d='M12 10.43c-.65-2.2-2.53-3.34-4.58-2.96-2.6.48-2.68 2.97-5.23 3.17-.38.03-.66.4-.53.76.73 1.88 2.07 5 5.53 5.33 3.12.3 4.33-1.8 4.81-2.82'
        stroke='currentColor'
      />
      <path
        d='M12 10.43a3.86 3.86 0 0 1 4.58-2.9c2.6.48 2.68 2.92 5.23 3.11.38.03.66.4.53.76-.73 1.88-2.07 5-5.53 5.33-3.12.3-4.33-1.8-4.81-2.82'
        stroke='currentColor'
      />
    </svg>
  )
}
