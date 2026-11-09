import type { Icon } from './types'

export const IconToyBrick: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-toy-brick'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.8 14.37c0-1.73 0-2.6.3-3.28a3.5 3.5 0 0 1 1.77-1.78c.68-.3 1.55-.3 3.28-.3h9.7c1.73 0 2.6 0 3.28.3.8.36 1.43.99 1.78 1.78.3.68.3 1.55.3 3.28 0 1.74 0 2.6-.3 3.28a3.5 3.5 0 0 1-1.78 1.78c-.68.3-1.55.3-3.28.3h-9.7c-1.73 0-2.6 0-3.28-.3a3.5 3.5 0 0 1-1.78-1.78c-.3-.68-.3-1.54-.3-3.28'
        fill='currentColor'
      />
      <path
        d='M7.15 19.73h9.7c1.73 0 2.6 0 3.28-.3a3.5 3.5 0 0 0 1.78-1.78c.3-.68.3-1.54.3-3.28s0-2.6-.3-3.28a3.5 3.5 0 0 0-1.78-1.78c-.68-.3-1.55-.3-3.28-.3h-9.7c-1.73 0-2.6 0-3.28.3A3.5 3.5 0 0 0 2.1 11.1c-.3.68-.3 1.55-.3 3.28 0 1.74 0 2.6.3 3.28.35.8.99 1.43 1.78 1.78.68.3 1.55.3 3.28.3'
        stroke='currentColor'
      />
      <path
        d='M9.96 9.01V6.27c0-.95 0-1.42-.3-1.71-.28-.3-.76-.3-1.7-.3H6.61c-.94 0-1.41 0-1.7.3s-.3.76-.3 1.7v2.75'
        stroke='currentColor'
      />
      <path
        d='M19.42 9.01V6.27c0-.95 0-1.42-.3-1.71-.29-.3-.76-.3-1.7-.3h-1.35c-.95 0-1.42 0-1.71.3s-.3.76-.3 1.7v2.75'
        stroke='currentColor'
      />
    </svg>
  )
}
