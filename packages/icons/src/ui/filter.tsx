import type { Icon } from './types'

export const IconFilter: Icon = ({
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
      data-slot='icon-ui-filter'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M7.2 11.8 2.88 7.46a4 4 0 0 1-.7-.79 2 2 0 0 1-.2-.5c-.07-.25-.07-.51-.07-1.05 0-1.23 0-1.85.26-2.3a2 2 0 0 1 .75-.76c.46-.26 1.07-.26 2.3-.26h13.65c1.23 0 1.84 0 2.3.26a2 2 0 0 1 .75.75c.27.46.27 1.08.27 2.3 0 .55 0 .81-.07 1.07a2 2 0 0 1-.2.49c-.14.22-.33.41-.7.8l-4.35 4.33c-.57.58-.86.87-1.02 1.24-.15.37-.15.77-.15 1.6v2.14c0 .76 0 1.13-.13 1.48l-.12.27c-.18.31-.47.56-1.05 1.05-2.33 1.97-3.5 2.95-4.49 2.7a2 2 0 0 1-.7-.32c-.82-.6-.82-2.13-.82-5.18v-2.15c0-.82 0-1.22-.15-1.6-.16-.36-.45-.65-1.02-1.23'
        fill='currentColor'
      />
      <path
        d='M7.2 11.8 2.88 7.46a4 4 0 0 1-.7-.79 2 2 0 0 1-.2-.5c-.07-.25-.07-.51-.07-1.05 0-1.23 0-1.85.26-2.3a2 2 0 0 1 .75-.76c.46-.26 1.07-.26 2.3-.26h13.65c1.23 0 1.84 0 2.3.26a2 2 0 0 1 .75.75c.27.46.27 1.08.27 2.3 0 .55 0 .81-.07 1.07a2 2 0 0 1-.2.49c-.14.22-.33.41-.7.8l-4.35 4.33c-.57.58-.86.87-1.02 1.24-.15.37-.15.77-.15 1.6v2.14c0 .76 0 1.13-.13 1.48l-.12.27c-.18.31-.47.56-1.05 1.05h0c-2.33 1.97-3.5 2.95-4.49 2.7a2 2 0 0 1-.7-.32c-.82-.6-.82-2.13-.82-5.18v-2.15c0-.82 0-1.22-.15-1.6-.16-.36-.45-.65-1.02-1.23'
        stroke='currentColor'
      />
    </svg>
  )
}
