import type { Icon } from './types'

export const IconBoxer: Icon = ({
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
      data-slot='icon-ui-boxer'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M1.82 6.57h20.36v10.77c0 .36 0 .54-.02.7a3 3 0 0 1-1.67 2.37c-.15.08-.32.14-.66.26l-.32.11a3 3 0 0 1-1.53.04c-.09-.01-.17-.04-.33-.09l-.69-.2a7 7 0 0 1-1.95-.75 3 3 0 0 1-.45-.4 7 7 0 0 1-.98-1.83c-.6-1.39-.9-2.08-1.37-2.2a1 1 0 0 0-.52 0c-.46.12-.76.81-1.37 2.2l-.12.28a6 6 0 0 1-.87 1.66 3 3 0 0 1-.63.55c-.38.25-.84.38-1.75.64l-.32.09c-.22.06-.33.1-.44.11a3 3 0 0 1-1.15.01l-.44-.1a8 8 0 0 1-1.13-.35 3 3 0 0 1-1.68-2.2 7 7 0 0 1-.04-1.2l.07-5.8z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='M1.93 6.64h20.14' stroke='currentColor' />
      <path
        d='M7.8 3.33h8.4c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12v7.34c0 1.88 0 2.83-.59 3.41-.58.59-1.53.59-3.41.59h-.58c-1.35 0-2.03 0-2.54-.36l-.04-.03c-.51-.37-.73-1.02-1.16-2.3h0c-.77-2.24-1.15-3.36-1.84-3.38h-.05c-.7.01-1.09 1.14-1.86 3.38-.45 1.3-.67 1.94-1.18 2.3l-.03.03c-.52.36-1.2.36-2.55.36H5.8c-1.88 0-2.83 0-3.41-.59-.59-.58-.59-1.53-.59-3.41V9.33c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88'
        stroke='currentColor'
      />
      <path
        d='M16.43 6.64v3c0 1.32 0 1.99-.2 2.52a3 3 0 0 1-1.7 1.7c-.53.2-1.2.2-2.53.2s-2 0-2.53-.2a3 3 0 0 1-1.7-1.7c-.2-.53-.2-1.2-.2-2.53v-3'
        stroke='currentColor'
      />
    </svg>
  )
}
