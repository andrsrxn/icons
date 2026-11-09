import type { Icon } from './types'

export const IconShoppingBagMinus: Icon = ({
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
      data-slot='icon-ui-shopping-bag-minus'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M12.35 22.47c4.6 0 6.9 0 8.1-1.49 1.2-1.5.7-3.73-.28-8.22l-1.05-4.77c-.55-2.5-.82-3.74-1.64-4.57a4 4 0 0 0-.7-.57c-.98-.61-2.26-.61-4.82-.61-2.63 0-3.95 0-4.94.64a4 4 0 0 0-.72.6c-.82.85-1.06 2.15-1.54 4.74L3.86 13c-.82 4.39-1.23 6.58-.03 8.03s3.43 1.44 7.9 1.44z'
        fill='currentColor'
      />
      <path d='M15.58 18.32H22' stroke='currentColor' />
      <path
        d='m20 11.39-.53-3.21c-.49-2.92-.73-4.37-1.7-5.3l-.36-.3c-1.07-.8-2.54-.8-5.5-.8-2.94 0-4.4 0-5.47.8l-.37.3c-.96.91-1.2 2.36-1.7 5.26l-.86 4.98c-.75 4.34-1.13 6.5.07 7.93s3.4 1.42 7.81 1.42h1.56'
        stroke='currentColor'
      />
      <path d='M8.86 6.46a3.13 3.13 0 1 0 6.26 0' stroke='currentColor' />
    </svg>
  )
}
