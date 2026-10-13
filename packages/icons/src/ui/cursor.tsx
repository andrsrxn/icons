import type { Icon } from './types'

export const IconCursor: Icon = ({
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
      data-slot='icon-ui-cursor'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M9.1 21.14 3.36 5.92c-.67-1.77-1-2.66-.55-3.12.46-.45 1.34-.12 3.12.54l15.03 5.59c.3.11.45.17.56.25a1 1 0 0 1 .4.72c.01.14-.02.3-.08.6-.03.2-.05.29-.09.37a1 1 0 0 1-.33.44q-.09.07-.33.18l-5.74 2.85c-.32.16-.48.24-.6.36-.12.13-.2.3-.34.62l-2.61 5.9q-.1.26-.18.36a1 1 0 0 1-.34.3q-.1.06-.37.14c-.4.12-.58.18-.76.17a1 1 0 0 1-.72-.34 3 3 0 0 1-.33-.7'
        fill='currentColor'
      />
      <path
        d='m7.43 17.47-3.6-9.79c-.96-2.62-1.44-3.93-.76-4.61s1.99-.2 4.61.76l9.83 3.6c3 1.09 4.5 1.64 4.53 2.66.03 1.01-1.44 1.64-4.37 2.9l-1.1.48c-1.09.47-1.63.7-2.04 1.11-.4.41-.64.96-1.1 2.05l-.43.99c-1.26 2.94-1.88 4.42-2.9 4.39s-1.57-1.53-2.67-4.54'
        stroke='currentColor'
      />
    </svg>
  )
}
