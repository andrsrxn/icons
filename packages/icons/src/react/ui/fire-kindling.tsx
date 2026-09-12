import type { Icon } from './types'

export const IconFireKindling: Icon = ({
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
      data-slot='icon-ui-fire-kindling'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M14.17 6.1a6.3 6.3 0 0 1-1.41-3.56c-.03-.33-.32-.53-.58-.31-.4.34-.9.92-1.28 1.73a7 7 0 0 0-.53 3.16c0 .3-.24.58-.52.48-.57-.2-.87-.71-1.07-1.09-.13-.23-.4-.26-.53-.02-.29.53-.58 1.5-.44 2.8.3 2.78 2.23 3.92 3.88 3.92 1.32 0 3.42-.43 3.86-3.03.21-1.26-.09-2.55-1.38-4.08'
        fill='currentColor'
      />
      <path d='m2.34 14.14 19.32 6.97' stroke='currentColor' />
      <path d='m21.56 13.87-19.12 7.5' stroke='currentColor' />
      <path
        d='M14.17 6.1a6 6 0 0 1-1.32-2.9c-.1-.52-.15-.78-.45-.87s-.44.07-.7.37q-.44.5-.8 1.26a7 7 0 0 0-.54 2.59c-.01.57-.02.85-.3.98-.3.13-.43 0-.7-.22a2 2 0 0 1-.34-.39c-.17-.24-.25-.37-.55-.33s-.34.14-.41.33a5 5 0 0 0-.25 2.37c.3 2.78 2.23 3.92 3.88 3.92 1.32 0 3.42-.43 3.86-3.03.21-1.26-.09-2.55-1.38-4.08'
        stroke='currentColor'
      />
    </svg>
  )
}
