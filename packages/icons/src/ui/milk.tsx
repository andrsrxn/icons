import type { Icon } from './types'

export const IconMilk: Icon = ({
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
      data-slot='icon-ui-milk'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path opacity='.2' d='M8.15 5h9.02l2 3.78v12.8l-8.22.78-.48-13.58z' fill='currentColor' />
      <path
        d='M4.73 10.79c0-1.02 0-1.53.16-2 .17-.48.48-.88 1.1-1.69l1.74-2.2 1.76 2.2c.65.8.98 1.21 1.15 1.7.17.48.17 1 .17 2.04v9.5c0 .94 0 1.41-.3 1.7-.29.3-.76.3-1.7.3h-.07c-1.89 0-2.83 0-3.41-.59-.59-.58-.59-1.52-.59-3.41z'
        stroke='currentColor'
      />
      <path
        d='M9.42 22.33h5.85c1.89 0 2.83 0 3.41-.59.59-.58.59-1.52.59-3.41v-8.04c0-.78 0-1.17-.1-1.54s-.28-.7-.66-1.38L17.47 5.5c-.12-.22-.19-.33-.22-.46-.03-.12-.03-.25-.03-.51v-.86c0-.94 0-1.41-.3-1.7-.29-.3-.76-.3-1.7-.3h-5.4c-.94 0-1.41 0-1.7.3-.3.29-.3.76-.3 1.7v1.38'
        stroke='currentColor'
      />
      <path d='M16.94 5h-8.9' stroke='currentColor' />
      <path d='M18.98 8.8H10.8' stroke='currentColor' />
    </svg>
  )
}
