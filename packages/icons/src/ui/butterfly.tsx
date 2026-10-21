import type { Icon } from './types'

export const IconButterfly: Icon = ({
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
      data-slot='icon-ui-butterfly'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M4.81 20.5c.2.71.3 1.07.56 1.27s.64.2 1.37.2H8.6c.42 0 .63 0 .82-.07s.34-.24.63-.54l.65-.68c.67-.71 1.01-1.07 1.44-1.07s.76.35 1.44 1.06l.68.7c.29.3.43.45.62.53s.4.08.82.08h1.4c.65 0 .98 0 1.24-.17.25-.18.37-.48.61-1.1l.7-1.77c.2-.5.3-.74.26-1-.03-.24-.18-.46-.49-.9l-1.09-1.52c-.48-.67-.71-1.01-.68-1.38.04-.37.33-.66.93-1.23l2.4-2.29c.26-.25.4-.38.47-.54.08-.17.1-.35.13-.71l.2-1.99c.06-.68.09-1.03-.07-1.3-.16-.28-.48-.42-1.1-.7l-.9-.42c-.44-.2-.65-.29-.88-.28s-.43.1-.85.32l-4.94 2.48c-.44.22-.67.33-.9.33-.24 0-.46-.11-.9-.34l-4.96-2.5c-.4-.2-.6-.3-.82-.3-.21-.01-.42.07-.84.24l-1.15.48c-.67.27-1 .41-1.18.7s-.13.65-.05 1.37l.3 2.7c.06.41.08.62.18.8.1.17.27.3.6.56l1.89 1.44c.71.54 1.07.82 1.13 1.2.07.4-.18.77-.7 1.52l-1.01 1.49c-.26.37-.38.56-.42.78s.02.44.14.87z'
        fill='currentColor'
      />
      <path
        d='M12 9.32c-1.67-2.24-4.28-4.88-7.88-4.49-3.69.41-2.56 6.68 2.15 8.91.35.17.44.66.15.93-1.21 1.1-2.73 2.94-1.91 5.3C5.7 23.4 10.59 22 12 18.92'
        stroke='currentColor'
      />
      <path
        d='M12 9.36c1.6-2.28 4.28-4.92 7.88-4.53 3.69.41 2.56 6.68-2.15 8.91-.35.17-.44.66-.15.93 1.21 1.1 2.73 2.94 1.91 5.3C18.3 23.4 13.41 22 12 18.92'
        stroke='currentColor'
      />
      <path d='M12 19.36V5.11' stroke='currentColor' />
      <path d='M15.9 2.04C12 3.37 12 6.6 12 6.6' stroke='currentColor' />
      <path d='M8.1 2.04C12 3.37 12 6.6 12 6.6' stroke='currentColor' />
    </svg>
  )
}
