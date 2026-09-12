import type { Icon } from './types'

export const IconBookmarks: Icon = ({
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
      data-slot='icon-ui-bookmarks'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M8.47 3.59a1.9 1.9 0 0 1 1.88-1.85h7.58c1.88 0 2.82 0 3.41.59.59.58.59 1.53.59 3.41v10.34c0 1.59 0 2.38-.52 2.67-.51.28-1.19-.14-2.54-.97l-1.76-1.1c-.93-.56-1.39-.85-1.64-1.3-.26-.46-.26-1-.26-2.1v-4.6c0-.45 0-.67-.09-.87s-.26-.35-.6-.65l-1.1-.94c-.28-.23-.42-.35-.57-.43a2 2 0 0 0-.67-.25c-.17-.03-.35-.03-.7-.03h-1.13c-1.06 0-1.9-.87-1.88-1.92'
        fill='currentColor'
      />
      <path
        d='M1.9 11.22c0-2.83 0-4.25.88-5.13s2.3-.87 5.12-.87h1.57c2.83 0 4.25 0 5.13.87.87.88.87 2.3.87 5.13v6.42c0 2.78 0 4.18-.85 4.58l-.04.02c-.86.38-1.92-.52-4.03-2.34l-.07-.06c-.87-.75-1.3-1.12-1.82-1.15h-.18c-.5.04-.94.42-1.79 1.18-1.96 1.75-2.94 2.62-3.77 2.34l-.26-.11c-.76-.43-.76-1.75-.76-4.37z'
        stroke='currentColor'
      />
      <path
        d='m15.61 15.44 1.49 1.21c2.12 1.74 3.18 2.61 4.04 2.2s.86-1.77.86-4.52V7.74c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88h-4.14c-.4 0-.6 0-.78.02A3 3 0 0 0 8.45 4.4c-.02.17-.02.37-.02.78'
        stroke='currentColor'
      />
    </svg>
  )
}
